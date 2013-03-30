var HEAP_SIZE = 64000;
var TRAIL_SIZE = 1024;
var NUM_REG = 17;
//var PREFIX = 'detalion#';
var PREFIX = '#';
var TRUE = PREFIX + 'true';
var FAIL = PREFIX + 'fail';

/// A trie containing a program
function ProgramDatabase() {
	this.db = {};

	this.store = function(statement) {
		var node = this.db;
		var term = statement;
		var lastNode = null;
		var lastTerm = null;
		while(Array.isArray(term)) {
			// Add matches for more general terms
			if(!node['*']) {
				node['*'] = [];
			}
			node['*'].push({st: statement});
			lastNode = node;
			lastTerm = term;
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
			this.bind(term1.ref, term2);
			return true;
		}
		if(term2.ref) {
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
		while(true) {
//console.log(goal);
			if(goal.length == 1) {
				if(goal[0] == TRUE) {
					return true;
				} else if(goal[0] == FAIL) {
					return false;
				}
			}
			var nodes = this.program.findMostSpecific([PREFIX + ':-', goal, '_'], this);
			if(nodes.length == 0) {
				return false;
			} else if(nodes.length > 1) {
				throw Error("Ambiguous goal: " + goal);
			}
			var clause = nodes[0].st;
			var head = clause[1];
			var body = clause[2];
			this.resetRegs();
			if(!this.unifyWrite(head, goal)) {
				return false;
			}
			var func = null;
			if(nodes[0].builtins) {
				var mode = this.calcMode();
				func = nodes[0].builtins[mode];
			}
			if(func) {
				goal = func.apply(this, this.registers.slice(1, this.TR + 1));
			} else {
				goal = this.unifyRead(body);
			}
		}
	};

	// Add a builtin predicate
	this.addBuiltin = function(name, arity, modeMap) {
		var head = [PREFIX + name];
		for(var i = 1; i <= arity; i++) {
			head.push({id:i});
		}
		var clause = [PREFIX + ':-', head, [PREFIX + 'error', 'Undefined mode for predicate ' + name + '/' + arity]];
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
	this.saveChoicePoint = function() {
		var cp = { H: this.H, T: this.T, BH: this.BH};
		this.BH = this.H;
		return cp;
	};

	// Restore a choice-point, recovering tralied values
	this.restoreChoicePoint = function(cp) {
		while(this.T > cp.T) {
			this.T--;
			this.heap[this.trailRefs[this.T]] = this.trail[this.T];
		}
		this.H = cp.H;
		this.BH = cp.BH;
	}
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
	det.addBuiltin(',', 2, {
		'II': function(first, rest) {
			if(this.call(first))
				return rest;
			else
				return [FAIL];
		}
	});

	det.addBuiltin('if', 3, {
		'III': function(cond, then, els) {
			var cp = this.saveChoicePoint();
			if(this.call(cond)) {
				return then;
			} else {
				this.restoreChoicePoint(cp);
				return els;
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
			return [TRUE];
		},
		'IOI': function(a, b, c) {
			if(c.substr(0, a.length) == a) {
				this.bind(b.ref, c.substr(a.length));
				return [TRUE];
			} else {
				return [FAIL];
			}
		},
		'OII': function(a, b, c) {
			if(c.substr(c.length - b.length) == b) {
				this.bind(a.ref, c.substr(0, c.length - b.length));
				return [TRUE];
			} else {
				return [FAIL];
			}
		}
	});

	det.addBuiltin('plus', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a+b);
			return [TRUE];
		}
	});

	det.addBuiltin('minus', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a-b);
			return [TRUE];
		}
	});

	det.addBuiltin('mult', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a*b);
			return [TRUE];
		}
	});

	det.addBuiltin('div', 3, {
		'IIO': function(a, b, c) {
			this.bind(c.ref, a/b);
			return [TRUE];
		}
	});

	det.addBuiltin('<', 2, {
		'II': function(a, b) {
			return (a<b) ? [TRUE] : [FAIL];
		}
	});


	det.program.store([PREFIX + ':-', [PREFIX + '=', {id:1}, {id:1}], [TRUE]]);
}

