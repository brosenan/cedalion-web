var HEAP_SIZE = 64000;
var STACK_SIZE = 64000;
var TRAIL_SIZE = 1024;
var NUM_REG = 17;
//var PREFIX = 'detalion#';
var PREFIX = '/detalion#';
var TRUE = PREFIX + 'true';
var FAIL = PREFIX + 'fail';
var DYNAMIC = '$$$dynamic$$$';

/// A trie containing a program
function ProgramDatabase() {
	this.db = {depth: 0};

	this.store = function(statement) {
//console.log('Storing: ' + JSON.stringify(statement));
		var depth = 0;
		var node = this.db;
		var term = statement;
		if(!node['*']) {
			node['*'] = [];
		}
		node['*'].push({st: statement});
		while(Array.isArray(term)) {
			depth++;
			// Add matches for more general terms
			if(!node['*']) {
				node['*'] = [];
			}
			node['*'].push({st: statement});
			var key = term[0] + '/' + (term.length - 1);
			if(!node[key]) {
				node[key] = {depth: depth};
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
		while(Array.isArray(term) && node && term[0] != DYNAMIC) {
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

	this.findMostSpecificNode = function(pattern, det) {
		var node = this.db;
		var fallback = node;
		var term = det.deref(pattern);
		var prevTerm = term;
		while(Array.isArray(term) && node && term[0] != DYNAMIC) {
			if(node['.']) {
				fallback = node;
				prevTerm = term;
			}
			node = node[term[0] + '/' + (term.length - 1)];
			term = det.deref(term[1]);
		}
		if(Array.isArray(prevTerm) && prevTerm[0] != DYNAMIC && !node && !fallback.fixed) {
			var lifted = det.lift(fallback, prevTerm[0], prevTerm.length-1);
			if(lifted) {
				var key = prevTerm[0] + '/' + (prevTerm.length - 1);
				var newNode = {'.': [{st: lifted, base: fallback['.'][0].st}]};
				fallback[key] = newNode;
				return newNode;
			}
		}
		return node || fallback;
	};
	
	this.findMostSpecific = function(pattern, det) {
		var node = this.findMostSpecificNode(pattern, det);
		if(!node['.'] && node['*']) {
			if(node['*'].length == 1) {
				return node['*'];
			} else {
				throw Error('Ambiguous result for pattern ' + JSON.stringify(pattern) + ' at depth ' + node.depth);
			}
		}
		return node['.'] || [];
	};
	
	// Store a function for handling a specific mode of a clause
	this.storeBuiltin = function(pattern, det, mode, func, numRegs) {
		var dbNode = this.findMostSpecificNode(pattern, det);
		var options = dbNode['.'] || [];
		if(options.length != 1) {
			throw Error('Pattern not found or not specific: ' + pattern);
		}
		var node = options[0];
		if(!node.builtins) {
			node.builtins = new Array(1<<numRegs);
		}
		node.builtins[mode] = func;
		dbNode.fixed = true;
	};

}

// The interpreter
function Interpreter(program, jit) {
	this.program = program;
	this.jit = jit;
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
		//this.trace('Failed');
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
//console.log('unifyWrite');
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
//console.log('unifyRead');
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
//console.log('unify');
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
//console.log('deepDeref: ' + JSON.stringify(term));
		term = this.deref(term);
		if(Array.isArray(term)) {
			var newTerm = new Array(term.length);
			newTerm[0] = term[0];
			for(var i = 1; i < term.length; i++) {
				newTerm[i] = this.deepDeref(term[i]);
			}
//console.log('return deepDeref');
			return newTerm;
		}
//console.log('return deepDeref (2)');
		return term;
	};

	// The interpreter
	this.call = function(goal) {
		try {
			var baseline = this.S;
			this.push(goal);
			while(this.S > baseline) {
				goal = this.pop();
//if(goal[0] == '/detalion/specialization#specialize') 
//console.log('#SPEC ' + JSON.stringify(this.deepDeref(this.toPrototype(goal))));
//console.log(this.termToDot(goal));
				var nodes = this.program.findMostSpecific([PREFIX + 'clause', goal, '_'], this);
				if(nodes.length == 0) {
					this.fail();
					continue;
				} else if(nodes.length > 1) {
					for(var i = 0; i < nodes.length; i++) {
						console.log(i + ") " + JSON.stringify(nodes[i].st));
					}
					throw Error("Ambiguous goal: " + JSON.stringify(this.deepDeref(goal)));
				}
				logClause(this, goal, nodes[0]);
				var clause = nodes[0].st;
				var head = clause[1];
				var body = clause[2];
				this.resetRegs();
//console.log(JSON.stringify(head));
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
		} catch(e) {
			this.trace(e);
			throw e;
		}
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
		this.FS = this.S;
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

	// Returns whether the two given terms equal, including sharing variables.
	this.termsEqual = function(t1, t2) {
		t1 = this.deref(t1);
		t2 = this.deref(t2);
		if(t1.ref) {
			if(!t2.ref) {
				return false;
			}
			if(t2.ref != t1.ref) {
				return false;
			}
			return true;
		} else if(Array.isArray(t1)) {
			if(!Array.isArray(t2)) {
				return false;
			}
			if(t1.length != t2.length) {
				return false;
			}
			if(t1[0] != t2[0]) {
				return false;
			}
			for(var i = 1; i < t1.length; i++) {
				if(!this.termsEqual(t1[i], t2[i])) {
					return false;
				}
			}
			return true;
		} else {
			return t1 == t2;
		}
	};

	// Remove annotations from a term
	this.removeAnnotations = function(term) {
		if(Array.isArray(term)) {
			// Escape: just provide the argument
			if(term.length == 2 && term[0] == 'annotation#escape') {
				return term[1];
			}
			// Annotation: recurse on the first argument
			if(term[0].substr(0,11) == 'annotation#') {
				return this.removeAnnotations(term[1]);
			}
			var newTerm = Array(term.length);
			newTerm[0] = term[0];
			for(var i = 1; i < term.length; i++) {
				newTerm[i] = this.removeAnnotations(term[i]);
			}
			return newTerm;
		} else {
			return term;
		}
	};

	this.termToDot = function(term, rand) {
		s = '';
		var rand = rand || Math.floor(Math.random() * 1000000000);
		if(term.rand && term.rand == rand) return '';
		term.rand = rand;
		if(term.ref) {
			s += 'ref' + term.ref + ' -> ' + this.dotNodeForTerm(this.heap[term.ref]) + '\n';
			s += this.termToDot(this.heap[term.ref], rand);
		} else if(Array.isArray(term)) {
			var node = this.dotNodeForTerm(term);
			for(var i = 1; i < term.length; i++) {
				s += node + ' -> ' + this.dotNodeForTerm(term[i]) + '\n';
				s += this.termToDot(term[i], rand);
			}
		}
		return s;
	};
	this.dotNodeForTerm = function(term) {
		if(term.ref) {
			return 'ref' + term.ref;
		} else if(Array.isArray(term)) {
			var id = term.id || Math.floor(Math.random() * 1000000000);
			term.id = id;
			return '"' + term[0] + '/' + (term.length - 1) + '@' + id + '"';
		} else {
			return '"' + term + '"';
		}
	};

	// Handle the situation when the program finds a solution that is not specific enough and can be specialized
	// This function either returns a clause to enter the program privately (i.e., only as a solution for such a case),
	// or undefined, if there is nothing to do.
	this.lift = function(node, name, arity) {
		if(this.jit) {
			return this.jit.lift(this, node, name, arity);
		}
	};

	// Returns a hash value for the term
	this.termHash = function(term) {
		term = this.toPrototype(term);
		if(Array.isArray(term)) {
			var hash = 0;
			for(var i = 0; i < term.length; i++) {
				hash *= 31;
				hash = hash % (1<<63);
				hash += this.termHash(term[i]);
			}
			return hash % (1<<63);
		} else if(term.id) {
			return term.id
		} else {
			var s = term.toString();
			var hash = 0;
			for(var i = 0; i < s.length; i++) {
				hash *= 31;
				hash = hash % (1<<63);
				hash += s.charCodeAt(i);
			}
			return hash % (1<<63);
		}
	};

	this.collectTermVars = function(term, vars, map) {
		term = this.deref(term);
		if(term.ref) {
			if(!map[term.ref]) {
				vars.push(term);
				map[term.ref] = 1;
			}
		} else if(Array.isArray(term)) {
			for(var i = 1; i < term.length; i++) {
				this.collectTermVars(term[i], vars, map);
			}
		}
	};

	this.toPrototype = function(term, map, arr) {
		term = this.deref(term);
		map = map || {};
		arr = arr || [];
		if(term.ref) {
			if(!map[term.ref]) {
				var count = arr.push(term.ref);
				map[term.ref] = count;
			}
			return {id: map[term.ref]};
		} else if(Array.isArray(term)) {
			var newTerm = Array(term.length);
			newTerm[0] = term[0];
			for(var i = 1; i < term.length; i++) {
				newTerm[i] = this.toPrototype(term[i], map, arr);
			}
			return newTerm
		} else {
			return term;
		}
	};

	this.collectVariables = function(term, map) {
		term = this.deref(term);
		if(term.ref) {
			map[term.ref] = true;
		} else if(Array.isArray(term)) {
			for(var i = 1; i < term.length; i++) {
				this.collectVariables(term[i], map);
			}
		}
	};

	this.hasVariablesFromMap = function(term, map) {
		term = this.deref(term);
		if(term.ref && map[term.ref]) {
			return true;
		} else if(Array.isArray(term)) {
			for(var i = 1; i < term.length; i++) {
				if(this.hasVariablesFromMap(term[i], map)) {
					return true;
				}
			}
			return false;
		} else {
			return false;
		}
	};

	this.trace = function(reason) {
		console.error('Trace: ' + reason);
		for(var i = 0; i < 5; i++) {
			var index = this.S - i + 1;
			console.error('\t' + index + ') ' + JSON.stringify(this.deepDeref(this.stack[index])));
		}
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
		},
		'IO': function(first, rest) {
			this.push(rest);
			this.push(first);
		}
	});

	det.addBuiltin('if', 3, {
		'III': function(cond, then, els) {			
//console.log(JSON.stringify(['if', cond, then, els]));
			var newGoal = [PREFIX + '__thenElse', then, els];
			this.push(newGoal);
			newGoal.push(this.createChoicePoint());
			this.push(cond);
		}
	});

	det.addBuiltin('__thenElse', 3, {
		'III': function(then, els, cp) {			
//console.log(JSON.stringify(['thenElse', then, els]));
//console.log(this.termToDot(then));
//console.log("=====");

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
		},
		'II': function(pattern, matches) {
			var det = this;
			var matchArray = this.program.findAllMatches(pattern, this).map(function(x) {
				det.resetRegs();
				return det.unifyRead(x.st);
			});
			if(!this.unify(matches, this.arrayToList(matchArray))) {
				this.fail();
			}
		}
	});

/*	det.addBuiltin('copyTerm', 3, {
		'IOI': function(source, target, type) {
			this.bind(target.ref, this.copyTerm(source));
		},
		'IOO': function(source, target, type) {
			this.bind(target.ref, this.copyTerm(source));
		},
		'OOI': function(source, target, type) {
			this.bind(target.ref, this.copyTerm(source));
		},
		'OOO': function(source, target, type) {
			this.bind(target.ref, this.copyTerm(source));
		},
		'III': function(source, target, type) {
			if(!this.unify(target, this.copyTerm(source))) {
				this.fail();
			}
		},
		'IIO': function(source, target, type) {
			if(!this.unify(target, this.copyTerm(source))) {
				this.fail();
			}
		},
		'OII': function(source, target, type) {
			if(!this.unify(target, this.copyTerm(source))) {
				this.fail();
			}
		},
		'OIO': function(source, target, type) {
			if(!this.unify(target, this.copyTerm(source))) {
				this.fail();
			}
		},
	});
*/
	det.addBuiltin('copyTerms', 1, {
		'I': function(triplets) {
			var map = {};
			while(Array.isArray(triplets) && triplets.length == 3) {
				var triplet = this.deref(triplets[1]);
				if(!this.unify(this.copyTerm(triplet[1], map), triplet[2])) {
					this.fail();
					return;
				}
				triplets = this.deref(triplets[2]);
			}
		}
	});
	function evalPred(goal, term, type, result) {
		var newGoal = [PREFIX + '__evalTerm', term, type, result];
		this.push(newGoal);
		newGoal.push(this.createChoicePoint());
		this.push(goal);
	}

/*	det.addBuiltin('eval', 4, {
		'IIIO': evalPred,
		'IOIO': evalPred,
		'IIII': evalPred,
		'IOII': evalPred,
		'IIOO': evalPred,
		'IOOO': evalPred,
		'IIOI': evalPred,
		'IOOI': evalPred,
	});
*/	
	function evalTermPred(term, type, result, cp) {
		term = this.deepDeref(term);
		this.rollbackChoicePoint(cp);
		term = this.copyTerm(term);
		if(!this.unify(result, term)) {
			this.fail();
			return;
		}
		if(this.inFailure()) {
			this.fail();
		}
	}

	det.addBuiltin('__evalTerm', 4, {
		'IIOI': evalTermPred,
		'OIOI': evalTermPred,
		'IIII': evalTermPred,
		'OIII': evalTermPred,
		'IOOI': evalTermPred,
		'OOOI': evalTermPred,
		'IOII': evalTermPred,
		'OOII': evalTermPred,
	});

	det.addBuiltin('debug', 2, {
		'II': function(title, value) {
//			console.log("[DBG] [" + title + "] " + JSON.stringify(this.deepDeref(value[1])));
//console.log(this.termToDot(value[1]));
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
			} else if(typeof(term) == 'string') {
				this.bind(name.ref, term);
				this.bind(args.ref, ['[]']);
			} else {
				throw Error('parseTerm called with non-compound ' + JSON.stringify(term));
			}
		},
		'IIO': function(tterm, name, args) {
			var det = this;
			var term = this.deref(tterm[1]);
			if(Array.isArray(term)) {
				if(!this.unify(name, term[0])) {
					this.fail();
					return;
				}
				this.bind(args.ref, this.arrayToList(term.slice(1).map(function(x){
					return ['::', x, det.heapAllocate()];
				})));
			} else if(typeof(term) == 'string') {
				if(!this.unify(name, term)) {
					this.fail();
					return;
				}
				this.bind(args.ref, ['[]']);
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
				if(!this.unify(args, newArgs)) {
					this.fail();
				}
			} else if(typeof(term) == 'string') {
				this.bind(name.ref, term);
				if(!this.unify(args, ['[]'])) {
					this.fail();
				}
			} else {
				throw Error('parseTerm called with non-compound ' + JSON.stringify(term));
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

	det.addBuiltin('equals', 3, {
		'III': function(term1, term2, type) {
			if(!this.termsEqual(term1, term2)) {
				this.fail();
			}
		},
		'IIO': function(term1, term2, type) {
			if(!this.termsEqual(term1, term2)) {
				this.fail();
			}
		},
		'OOI': function(term1, term2) {
			if(term1.ref != term2.ref) {
				this.fail();
			}
		},
		'OOO': function(term1, term2) {
			if(term1.ref != term2.ref) {
				this.fail();
			}
		},
		'IOI': function() {
			this.fail();
		},
		'OII': function() {
			this.fail();
		},
		'IOO': function() {
			this.fail();
		},
		'OIO': function() {
			this.fail();
		},
	});
	det.addBuiltin('toString', 3, {
		'IIO': function(term, type, str) {
			this.bind(str.ref, term.toString());
		},
		'IOO': function(term, type, str) {
			this.bind(str.ref, term.toString());
		},
		'III': function(term, type, str) {
			if(str != str.ref, term.toString()) {
				this.fail();
			}
		},
		'IOI': function(term, type, str) {
			if(str != str.ref, term.toString()) {
				this.fail();
			}
		},
	});
	det.addBuiltin('removeAnnotations', 3, {
		'IOO': function(term1, term2, type) {
			this.bind(term2.ref, this.removeAnnotations(term1));
		},
		'IOI': function(term1, term2, type) {
			this.bind(term2.ref, this.removeAnnotations(term1));
		},
		'IIO': function(term1, term2, type) {
			if(!this.unify(term2, this.removeAnnotations(term1))) {
				this.fail();
			}
		},
		'III': function(term1, term2, type) {
			if(!this.unify(term2, this.removeAnnotations(term1))) {
				this.fail();
			}
		},
		'OOO': function(term1, term2, type) {
			this.bind(term2.ref, term1);
		},
		'OOI': function(term1, term2, type) {
			this.bind(term2.ref, term1);
		},
		'OIO': function(term1, term2, type) {
			this.bind(term1.ref, term2);
		},
		'OII': function(term1, term2, type) {
			this.bind(term1.ref, term2);
		},
	});

	function findMostSpecific(pattern, result, numMoreSpecific) {
		var node = this.program.findMostSpecificNode(pattern, this);
		var matches = node['.'] || [];
		if(matches.length > 1) {
			throw Error('Ambiguous query: ' + JSON.stringify(pattern));
		} else if (matches.length == 0) {
			this.fail();
		} else {
			this.resetRegs();
			if(!this.unifyWrite(matches[0].st, result)) {
				this.fail();
				return;
			}
			var moreSpecCount = 0;
			if(node['*']) {
				var subterm = this.deref(pattern);
				for(var i = 0; i < node.depth; i++) {
					subterm = this.deref(subterm[1]);
				}
				if(Array.isArray(subterm) && subterm.length == 2 && subterm[0] == DYNAMIC) {
					moreSpecCount = node['*'].length;
				}
			}
			if(!this.unify(numMoreSpecific, moreSpecCount)) {
				this.fail();
				return;
			}
		}
	}
	det.addBuiltin('findMostSpecific', 3, {
		'IOO': findMostSpecific,
		'IIO': findMostSpecific,
		'IOI': findMostSpecific,
		'III': findMostSpecific,
	});

	function hashGoal(goal, seed, hashed) {
		var vars = [];
		this.collectTermVars(goal, vars, {});
		this.bind(hashed.ref, [seed + '_' + this.termHash(goal)].concat(vars))
	}
	det.addBuiltin('hashGoal', 3, {
		'IIO': hashGoal,
		'OIO': hashGoal,
	});

	det.addBuiltin('shareVariables', 2, {
		'II': function(tterm1, tterm2) {
			var term1 = this.deref(tterm1)[1];
			var term2 = this.deref(tterm2)[1];
			var map = {};
			det.collectVariables(term1, map);
			if(!det.hasVariablesFromMap(term2, map)) {
				this.fail();
			}
		},
	});

	function markDynamic(term) {
		term = this.deref(term);
		if(term.ref) {
			this.bind(term.ref, [DYNAMIC, this.heapAllocate()]);
		} else if(Array.isArray(term) && term[0] != DYNAMIC) {
			for(var i = 1; i < term.length; i++) {
				markDynamic.call(this, term[i]);
			}
		}
	}
	det.addBuiltin('markDynamic', 2, {
		'II': markDynamic,
		'IO': markDynamic,
		'OI': markDynamic,
		'OO': markDynamic,
	});

	function getUnmarked(det, term) {
		term = det.deref(term);
		if(Array.isArray(term) && term[0] == DYNAMIC) {
			return term[1];
		} else if(Array.isArray(term)) {
			var newTerm = Array(term.length);
			newTerm[0] = term[0];
			for(var i = 1; i < term.length; i++) {
				newTerm[i] = getUnmarked(det, term[i]);
			}
			return newTerm;
		} else {
			return term;
		}
	}

	function unmarkDynamic(t1, t2) {
		var unmarked = getUnmarked(this, t1);
//		console.log(JSON.stringify(this.deepDeref(t1)));
//		console.log(JSON.stringify(unmarked));
		if(!this.unify(t2, unmarked)) {
			this.fail();
		}
	}

	det.addBuiltin('unmarkDynamic', 3, {
		'OOI': unmarkDynamic,
		'OOO': unmarkDynamic,
		'OII': unmarkDynamic,
		'OIO': unmarkDynamic,
		'IOI': unmarkDynamic,
		'IOO': unmarkDynamic,
		'III': unmarkDynamic,
		'IIO': unmarkDynamic,
	});

	function isDynamic(term, type, v) {
		term = this.deref(term);
		if(Array.isArray(term) && term[0] == DYNAMIC) {
			if(!this.unify(v, term[1])) {
				this.fail();
			}
		} else {
			this.fail();
		}
	}
	
	det.addBuiltin('isDynamic', 3, {
		'III': isDynamic,
		'IIO': isDynamic,
		'IOI': isDynamic,
		'IOO': isDynamic,
		'OII': isDynamic,
		'OIO': isDynamic,
		'OOI': isDynamic,
		'OOO': isDynamic,
	});

	det.program.store([PREFIX + 'clause', [PREFIX + '=', {id:1}, {id:1}], [TRUE]]);
}

function Jit(thresholds) {
	this.thresholds = thresholds;
	this.locked = false;
	this.cached = {};
	
	this.lift = function(det, node, name, arity) {
		if(!this.thresholds.lifting) {
			return;
		}
		if(this.locked) {
			return;
		}
		this.locked = true;
		var result = (function() {
			if(!node.lifting) {
				node.lifting = {};
			}
			var key = name + "/" + arity;
			if(!node.lifting[key]) {
				node.lifting[key] = 1;
			} else {
				node.lifting[key]++;
			}
			if(node.lifting[key] < this.thresholds.lifting) {
				return;
			}
			var matches = node['.'];
			if(!matches) {
				return;
			}
			if(matches.length != 1) {
				throw Error('Non-determinism detected when lifting ' + key);
			}
			var clause = matches[0].st;
			if(clause.length != 3 || clause[0] != PREFIX + 'clause') {
				return;
			}
			det.resetRegs();
			clause = det.unifyRead(clause);
			// Do not lift trivial clauses
			if(Array.isArray(clause[2]) && clause[2].length == 1 && clause[2][0] == TRUE) {
				return;
			}
		
			// Do the actual lifting
			var curr = clause[1];
			while(Array.isArray(curr) && curr.length > 1) {
				curr = curr[1];
			}
			if(curr.ref) {
				var newTerm = [name];
				for(i = 0; i < arity; i++) {
					newTerm.push(det.heapAllocate());
				}
				det.bind(curr.ref, newTerm);
			} else {
				return;
			}
//if(clause[1][0] != '/detalion/specialization#specialize' || clause[1][1][0] != '/detalion#conj') return;
console.log('* Lifting: ' + JSON.stringify(det.deepDeref(clause[1])));
//console.log('<');
			// Specialize the body
			var cp = det.createChoicePoint();
			var specialized = det.heapAllocate();
			var newClauses = det.heapAllocate();
			var b = det.call(['det#specialize', clause, specialized, newClauses]);
//console.log('>');
			if(b) {
				det.commitChoicePoint(cp);
				newClauses = det.listToArray(newClauses);
				for(var i = 0; i < newClauses.length; i++) {
					var key = det.deref(det.deref(newClauses[i])[1])[0];
					if(!this.cached[key]) {
						this.cached[key] = true;
//console.log('Added enclosed: ' + JSON.stringify(det.toPrototype(newClauses[i])));
						det.program.store(det.toPrototype(newClauses[i]));
					}
				}
console.log('* Added: ' + JSON.stringify(det.deepDeref(specialized)));
				return det.toPrototype(specialized);
			} else {
				det.rollbackChoicePoint(cp);
//console.log('* specialization failed');
//console.log('Added: ' + JSON.stringify(det.deepDeref(clause[1])) + ' :- FAIL');
//console.log('Failed: ' + JSON.stringify(det.deepDeref(clause[2])));
				return det.toPrototype([PREFIX + 'clause', clause[1], [FAIL]]);
				return;
			}
		}).call(this);
		this.locked = false;
		return result;
	};
}

function logClause(det, goal, node) {
	if(!node.base) {
		return;
	}
//	console.log('###@@' + JSON.stringify({goal: det.toPrototype(goal), orig: node.base, lifted: node.st}));
}

