var HEAP_SIZE = 64000;
var STACK_SIZE = 64000;
var TRAIL_SIZE = 1024;
var NUM_REG = 17;
//var PREFIX = 'detalion#';
var PREFIX = '/detalion#';
var TRUE = PREFIX + 'true';
var FAIL = PREFIX + 'fail';

/// A trie containing a program
function ProgramDatabase() {
	this.db = {};

	this.store = function(statement) {
		var node = this.db;
		var term = statement;
		if(!node['*']) {
			node['*'] = [];
		}
		node['*'].push({st: statement});
		while(Array.isArray(term)) {
			// Add matches for more general terms
			if(!node['*']) {
				node['*'] = [];
			}
			node['*'].push({st: statement});
			var key = term[0] + '/' + (term.length - 1);
			if(!node[key]) {
				node[key] = {};
			}
			node = node[key];
			term = term[1];
		}
		// Add a match for an equally or more specific term
		if(!node['.']) {
			node['.'] = [];
		}
		node['.'].push({st: statement});
	};

	this.findAllMatches = function(pattern, det) {
		var results = [];
		var node = this.db;
		var term = det.deref(pattern);
		while(Array.isArray(term) && node) {
			if(node['.'])
				results = results.concat(node['.']);
			node = node[term[0] + '/' + (term.length - 1)];
			term = det.deref(term[1]);
		}
		if(node && node['.'])
			results = results.concat(node['.']);
		if(node && node['*'])
			results = results.concat(node['*']);
		return results;
	};

	this.findMostSpecific = function(pattern, det) {
		var fallback = [];
		var node = this.db;
		var term = det.deref(pattern);
		while(Array.isArray(term) && node) {
			if(node['.'])
				fallback = node['.'];
			node = node[term[0] + '/' + (term.length - 1)];
			term = det.deref(term[1]);
		}
		if(node && node['.'])
			return node['.'];
		if(node && node['*'])
			return node['*'];
		return fallback;
	};
	
	// Store a function for handling a specific mode of a clause
	this.storeBuiltin = function(pattern, det, mode, func, numRegs) {
		var options = this.findMostSpecific(pattern, det);
		if(options.length != 1) {
			throw Error('Pattern not found or not specific: ' + pattern);
		}
		var node = options[0];
		if(!node.builtins) {
			node.builtins = new Array(1<<numRegs);
		}
		node.builtins[mode] = func;
	};

}

// The interpreter
function Interpreter(program) {
	this.program = program;
	this.heap = new Array(HEAP_SIZE);
	this.stack = new Array(STACK_SIZE);
	this.registers = new Array(NUM_REG);
	this.trail = new Array(TRAIL_SIZE);
	this.trailRefs = new Array(TRAIL_SIZE);
	// The next available heap location
	this.H = 1;
	// The top allocated register
	this.TR = 0;
	// The point on the heap where the last choice point was placed.
	// Below this point, changes must be trailed.
	this.BH = 1;
	// Trail pointer
	this.T = 0;
	// Position on the stack of the current goal on the stack
	this.S = -1;
	// Position on the stack of the goal to be evaluated after failure
	this.FS = -1;
	// Did the last operation fail?
	this.failure = false;
	// Allocate a new heap location and return a reference
	this.heapAllocate = function() {
		var ref = this.H;
		this.H++;
		var val = {ref: ref}
		this.heap[ref] = val;
		return val;
	};

	// Reset all registers
	this.resetRegs = function() {
		this.TR = 0;
	}
	// Get the value of a register
	this.getReg = function(reg) { 
		if(reg > this.TR) {
			return null;
		} else {
			return this.registers[reg];
		}
	};
	// Modify the value of a register
	this.setReg = function(reg, val) {
		if(reg > this.TR) {
			this.TR++;
		}
		while(reg > this.TR) {
			this.registers[this.TR] = null;
			this.TR++;
		}
		this.registers[reg] = val;
	};

	// Push a goal to the top of the stack
	this.push = function(goal) {
		this.S++;
		this.stack[this.S] = goal;
	};

	// Pop the last goal from the stack
	this.pop = function () {
		var goal = this.stack[this.S];
		this.S--;
		return goal;
	};

	// Collapse the stack as a result of failure
	// (this method does not roll-back the choice point).
	this.fail = function() {
		this.S = this.FS;
		this.failure = true;
	};

	// Was fail() called since the last time this method was called?
	this.inFailure = function() {
		var tmp = this.failure;
		this.failure = false;
		return tmp;
	};
	
	// Bind a value to a variable
	this.bind = function(ref, val) {
		if(ref < this.BH) {
			this.trail[this.T] = this.heap[ref];
			this.trailRefs[this.T] = ref;
			this.T++;
		}
		this.heap[ref] = val;
	};

	// Dereference a value by walking all variable references
	this.deref = function(term, addr) {
		addr = addr || -1;
		if(term && term.ref && term.ref != addr) {
			var value = this.deref(this.heap[term.ref], term.ref);
			this.bind(term.ref, value);
			return value;
		} else {
			return term;
		}
	};

	// Unify a prototype with a term, writing to registers
	this.unifyWrite = function(proto, term) {
		term = this.deref(term);
		if(proto.id) {
			var val = this.getReg(proto.id);
			if(val == null) {
				this.setReg(proto.id, term);
				return true;
			} else {
				return this.unify(val, term);
			}
		} else if(term.ref) {
			this.bind(term.ref, this.unifyRead(proto));
			return true;
		} else if(Array.isArray(proto)) {
			if(!Array.isArray(term))
				return false;
			if(term.length != proto.length)
				return false;
			if(term[0] != proto[0])
				return false;
			for(var i = 1; i < proto.length; i++) {
				if(!this.unifyWrite(proto[i], term[i])) {
					return false;
				}
			}
			return true;
		} else {
			return proto === term;
		}
	};

	// Returns a term corresponding to the given prototype with the current register values
	this.unifyRead = function(proto) {
		if(proto.id) {
			var val = this.getReg(proto.id);
			if(val == null) {
				val = this.heapAllocate();
				this.setReg(proto.id, val);
			}
			return val;
		} else if(Array.isArray(proto)) {
			var term = new Array(proto.length);
			term[0] = proto[0];
			for(var i = 1; i < proto.length; i++) {
				term[i] = this.unifyRead(proto[i]);
			}
			return term;
		} else {
			return proto;
		}
	};

	// Unify two terms
	this.unify = function(term1, term2) {
		term1 = this.deref(term1);
		term2 = this.deref(term2);
		if(term1.ref) {
//console.log('binding ' + term1.ref + ' <- ' + JSON.stringify(this.deepDeref(term2)));
			this.bind(term1.ref, term2);
			return true;
		}
		if(term2.ref) {
//console.log('binding ' + term2.ref + ' <- ' + JSON.stringify(this.deepDeref(term1)));
			this.bind(term2.ref, term1);
			return true;
		}
		if(Array.isArray(term1)) {
			if(!Array.isArray(term2)) {
				return false;
			}
			if(term1.length != term2.length) {
				return false;
			}
			if(term1[0] != term2[0]) {
				return false;
			}
			for(var i = 1; i < term1.length; i++) {
				if(!this.unify(term1[i], term2[i])) {
					return false;
				}
			}
			return true;
		} else {
			return term1 === term2;
		}
	};

	// Deep deref
	this.deepDeref = function(term) {
		term = this.deref(term);
		if(Array.isArray(term)) {
			var newTerm = new Array(term.length);
			newTerm[0] = term[0];
			for(var i = 1; i < term.length; i++) {
				newTerm[i] = this.deepDeref(term[i]);
			}
			return newTerm;
		}
		return term;
	};

	// The interpreter
	this.call = function(goal) {
		this.push(goal);
		while(this.S >= 0) {
			goal = this.pop();
//console.log(this.deepDeref(goal));
			var nodes = this.program.findMostSpecific([PREFIX + 'clause', goal, '_'], this);
			if(nodes.length == 0) {
				this.fail();
				continue;
			} else if(nodes.length > 1) {
				throw Error("Ambiguous goal: " + JSON.stringify(this.deepDeref(goal)));
			}
			var clause = nodes[0].st;
			var head = clause[1];
			var body = clause[2];
			this.resetRegs();
			if(!this.unifyWrite(head, goal)) {
				this.fail();
				continue;
			}
			var func = null;
			if(nodes[0].builtins) {
				var mode = this.calcMode();
//console.log(mode);
				func = nodes[0].builtins[mode];
			}
			if(func) {
				func.apply(this, this.registers.slice(1, this.TR + 1));
			} else {
				this.push(this.unifyRead(body));
			}
		}
		return !this.inFailure();
	};

	// Add a builtin predicate
	this.addBuiltin = function(name, arity, modeMap) {
		var head = [PREFIX + name];
		for(var i = 1; i <= arity; i++) {
			head.push({id:i});
		}
		var clause = [PREFIX + 'clause', head, [PREFIX + 'error', 'Undefined mode for predicate ' + name + '/' + arity]];
		this.program.store(clause);
		for(var modeStr in modeMap) {
			this.program.storeBuiltin(clause, this, modeStrToNum(modeStr), modeMap[modeStr], modeStr.length);
		}
	};

	// Calculate the calling mode based on the registers
	this.calcMode = function() {
		var mode = 0;
		for(var i = 1; i <= this.TR; i++) {
			mode *= 2;
			var reg = this.registers[i];
			if(reg != null && !reg.ref) {
				mode++;
			}
		}
		return mode;
	};

	// Save the state for a choice point
	this.createChoicePoint = function() {
		var cp = { H: this.H, T: this.T, BH: this.BH, FS : this.FS};
		this.BH = this.H;
		this.FS = this.S + 1;
		return cp;
	};

	// Restore a choice-point, recovering tralied values
	this.rollbackChoicePoint = function(cp) {
		while(this.T > cp.T) {
			this.T--;
			this.heap[this.trailRefs[this.T]] = this.trail[this.T];
		}
		this.H = cp.H;
		this.BH = cp.BH;
		this.FS = cp.FS;
	}

	// Commit a choice-point
	this.commitChoicePoint = function(cp) {
		this.BH = cp.BH;
		this.FS = cp.FS;
	}

	// Convert an array to a list
	this.arrayToList = function(array) {
		var list = ['[]'];
		for(var i = array.length - 1; i >= 0; i--) {
			list = ['.', array[i], list];
		}
		return list;
	};

	// Convert a list to an array
	this.listToArray = function(list) {
		list = this.deref(list);
		var array = [];
		while(list.length == 3) {
			array.push(list[1]);
			list = this.deref(list[2]);
		}
		return array;
	};

	// Create a duplicate of a term, using fresh heap variables to replace all existing variables
	this.copyTerm = function(term, map) {
		map = map || {};
		term = this.deref(term);
		if(term.ref) {
			if(!map[term.ref]) {
				map[term.ref] = this.heapAllocate();
			}
			return map[term.ref];
		} else if(Array.isArray(term)) {
			var newTerm = Array(term.length);
			newTerm[0] = term[0];
			for(var i = 1; i < term.length; i++) {
				newTerm[i] = this.copyTerm(term[i], map);
			}
			return newTerm;
		} else {
			return term;
		}
	};
}

function modeStrToNum(modeStr) {
	var mode = 0;
	for(var i = 0; i < modeStr.length; i++) {
		mode *= 2;
		if(modeStr.charAt(i) == 'I') {
			mode++;
		}
	}
	return mode;
}

function createBuiltins(det) {
	det.addBuiltin('true', 0, {
		'': function() {
		}
	});

	det.addBuiltin('fail', 0, {
		'': function() {
			this.fail();
		}
	});

	det.addBuiltin('conj', 2, {
		'II': function(first, rest) {
			this.push(rest);
			this.push(first);
		}
	});

	det.addBuiltin('if', 3, {
		'III': function(cond, then, els) {			
//console.log(JSON.stringify(['if', cond, then, els]));
			this.push([PREFIX + '__thenElse', then, els, this.createChoicePoint()]);
			this.push(cond);
		}
	});

	det.addBuiltin('__thenElse', 3, {
		'III': function(then, els, cp) {			
			if(this.inFailure()) {
				this.rollbackChoicePoint(cp);
				this.push(els);
			} else {
				this.commitChoicePoint(cp);
				this.push(then);
			}
		}
	});

	det.addBuiltin('error', 1, {
		'I': function(err) {
			throw Error(err);
		}
	});

	det.addBuiltin('strcat', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a+b);
		},
		'IOI': function(a, b, c) {
			if(c.substr(0, a.length) == a) {
				this.bind(b.ref, c.substr(a.length));
			} else {
				this.fail();
			}
		},
		'OII': function(a, b, c) {
			if(c.substr(c.length - b.length) == b) {
				this.bind(a.ref, c.substr(0, c.length - b.length));
			} else {
				this.fail();
			}
		},
		'III': function(a, b, c) {
			if(a + b != c) {
				this.fail();
			}
		}
	});

	det.addBuiltin('plus', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a+b);
		},
		'III': function(a, b, c) {
			if(a + b != c) {
				this.fail();
			}
		},
	});

	det.addBuiltin('minus', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a-b);
		},
		'III': function(a, b, c) {
			if(a - b != c) {
				this.fail();
			}
		}
	});

	det.addBuiltin('mult', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a*b);
		},
		'III': function(a, b, c) {
			if(a * b != c) {
				this.fail();
			}
		}
	});

	det.addBuiltin('div', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a/b);
		},
		'III': function(a, b, c) {
			if(a / b != c) {
				this.fail();
			}
		}
	});

	det.addBuiltin('lt', 2, {
		'II': function(a, b) {
			if(!(a<b)) {
				this.fail();
			}
		}
	});

	det.addBuiltin('findAllMatches', 2, {
		'IO': function(pattern, matches) {
			var det = this;
			var matchArray = this.program.findAllMatches(pattern, this).map(function(x) {
				det.resetRegs();
				return det.unifyRead(x.st);
			});
			this.bind(matches.ref, this.arrayToList(matchArray));
		}
	});

	det.addBuiltin('copyTerm', 3, {
		'IOI': function(source, target, type) {
			this.bind(target.ref, this.copyTerm(source));
		},
		'III': function(source, target, type) {
			if(!this.unify(target, this.copyTerm(source))) {
				this.fail();
			}
		}
	});

	function evalPred(goal, term, type, result) {
		this.push([PREFIX + '__evalTerm', term, type, result, this.createChoicePoint()]);
		this.push(goal);
	}

	det.addBuiltin('eval', 4, {
		'IIIO': evalPred,
		'IOIO': evalPred,
	});
	
	function evalTermPred(term, type, result, cp) {
		term = this.deepDeref(term);
		this.rollbackChoicePoint(cp);
		this.bind(result.ref, term);
		if(this.inFailure()) {
			this.fail();
		}
	}

	det.addBuiltin('__evalTerm', 4, {
		'IIOI': evalTermPred,
		'OIOI': evalTermPred,
	});

	det.addBuiltin('debug', 2, {
		'II': function(title, value) {
			console.log("[DBG] [" + title + "] " + JSON.stringify(this.deepDeref(value[1])));
		},
	});

	det.addBuiltin('strrep', 4, {
		'IIIO': function(src, rep, to, tgt) {
			this.bind(tgt.ref, src.replace(rep, to));
		},
		'IIII': function(src, rep, to, tgt) {
			if(src.replace(rep, to) != tgt) {
				this.fail();
			}
		},
	});

	det.addBuiltin('compound', 2, {
		'II': function(term, type) {
			term = this.deref(term);
			if(!Array.isArray(term)) {
				this.fail();
			}
		},
		'IO': function(term, type) {
			term = this.deref(term);
			if(!Array.isArray(term)) {
				this.fail();
			}
		},
		'OI': function(term, type) {
			this.fail();
		},
		'OO': function(term, type) {
			this.fail();
		},
	});

	det.addBuiltin('var', 2, {
		'II': function(term, type) {
			term = this.deref(term);
			if(!term.ref) {
				this.fail();
			}
		},
		'IO': function(term, type) {
			term = this.deref(term);
			if(!term.ref) {
				this.fail();
			}
		},
		'OI': function(term, type) {
		},
		'OO': function(term, type) {
		},
	});

	det.addBuiltin('string', 2, {
		'II': function(term, type) {
			term = this.deref(term);
			if(typeof(term) != 'string') {
				this.fail();
			}
		},
		'IO': function(term, type) {
			term = this.deref(term);
			if(typeof(term) != 'string') {
				this.fail();
			}
		},
		'OI': function(term, type) {
			this.fail();
		},
		'OO': function(term, type) {
			this.fail();
		},
	});

	det.addBuiltin('number', 2, {
		'II': function(term, type) {
			term = this.deref(term);
			if(typeof(term) != 'number') {
				this.fail();
			}
		},
		'IO': function(term, type) {
			term = this.deref(term);
			if(typeof(term) != 'string') {
				this.fail();
			}
		},
		'OI': function(term, type) {
			this.fail();
		},
		'OO': function(term, type) {
			this.fail();
		},
	});

	det.addBuiltin('parseTerm', 3, {
		'IOO': function(tterm, name, args) {
			var det = this;
			var term = this.deref(tterm[1]);
			if(Array.isArray(term)) {
				this.bind(name.ref, term[0]);
				this.bind(args.ref, this.arrayToList(term.slice(1).map(function(x){
					return ['::', x, det.heapAllocate()];
				})));
			} else {
				throw Error('parseTerm called with non-compound ' + JSON.stringify(term));
			}
		},
		'IOI': function(tterm, name, args) {
			var det = this;
			var term = this.deref(tterm[1]);
			if(Array.isArray(term)) {
				this.bind(name.ref, term[0]);
				var newArgs = this.arrayToList(term.slice(1).map(function(x){
					return ['::', x, det.heapAllocate()];
				}));
			} else {
				throw Error('parseTerm called with non-compound ' + JSON.stringify(term));
			}
			if(!this.unify(args, newArgs)) {
				this.fail();
			}
		},
		'OII': function(tterm, name, args) {
			var det = this;
			args = this.listToArray(args).map(function(x) {
				det.resetRegs();
				det.unifyWrite(['::', {id:1}, {id:2}], x);
				return det.unifyRead({id:1});
			});
			var term = [name].concat(args);
			this.bind(tterm.ref, ['::', term, det.heapAllocate()]);
		},
		'III': function(tterm, name, args) {
			var det = this;
			args = this.listToArray(args).map(function(x) {
				det.resetRegs();
				det.unifyWrite(['::', {id:1}, {id:2}], x);
				return det.unifyRead({id:1});
			});
			var term = [name].concat(args);
			if(!this.unify(tterm, ['::', term, det.heapAllocate()])) {
				this.fail();
			}
		},
	});

	det.addBuiltin('charCodes', 2, {
		'IO': function(str, codes) {
			var list = ['[]'];
			for(var i = str.length - 1; i >= 0; i--) {
				list = ['.', str.charCodeAt(i), list];
			}
			this.bind(codes.ref, list);
		},
		'OI': function(str, codes) {
			var s = '';
			while(codes.length == 3) {
				s = s + String.fromCharCode(this.deref(codes[1]));
				codes = this.deref(codes[2]);
			}
			this.bind(str.ref, s);
		},
		'II': function(str, codes) {
			var list = ['[]'];
			for(var i = str.length - 1; i >= 0; i--) {
				list = ['.', str.charCodeAt(i), list];
			}
			if(!this.unify(codes, list)) {
				this.fail();
			}
		},
	});

	det.program.store([PREFIX + 'clause', [PREFIX + '=', {id:1}, {id:1}], [TRUE]]);
}

