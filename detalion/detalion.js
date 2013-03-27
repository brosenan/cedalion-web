var STACK_SIZE = 64000;
var MAX_ARITY = 8;

/// A trie containing a program
function ProgramDatabase() {
	this.db = {};

	this.store = function(statement) {
		var node = this.db;
		var term = statement;
		var lastNode = null;
		var lastTerm = null;
		while(term instanceof Array) {
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
		while(term instanceof Array && node) {
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
	}

	this.findMostSpecific = function(pattern, det) {
		var fallback = [];
		var node = this.db;
		var term = det.deref(pattern);
		while(term instanceof Array && node) {
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
	}

}

// The interpreter
function Interpreter(program) {
	this.program = program;
	this.builtins = createBuiltins();
	this.stack = new Array(STACK_SIZE);
	this.SP = 0;
	this.NF = 1;
	this.getVar = function(n) { return this.stack[this.SP + n]; };
	this.deref = function(term) {
		var last = -1;
		var toUpdate = [];
		while(term && term.ref && term.ref != last) {
			last = term.ref;
			toUpdate.push(last);
			term = this.stack[term.ref];
		}
		for(var i = 0; i < toUpdate.length; i++) {
			this.updateStack(toUpdate[i], term);
		}
		return term;
	};
	this.bind = function(v, term) {
		v = this.deref(v);
		term = this.deref(term);
		if(!v.ref) {
			throw Error('Trying to bind an already bound variable');
		}
		if(term.ref && term.ref > v.ref) {
			this.updateStack(term.ref, v);
		} else {
			this.updateStack(v.ref, term);
		}
	};
	this.updateStack = function(n, term) {
		this.allocateFrame(n);
		this.stack[n] = term;
	};
	this.allocateFrame = function(addr) {
		while(this.NF <= addr) {
			this.stack[this.NF] = {ref: this.NF};
			this.NF++;
		}
	}
	this.unifyRel = function(rel, abs) {
//console.log('unifying ' + JSON.stringify(rel) + ' and '  + JSON.stringify(abs));
		abs = this.deref(abs);
		if(rel.id) {
			this.allocateFrame(this.SP + rel.id);
			return this.unify({ref: this.SP + rel.id}, abs);
		}
		if(abs.ref) {
			this.bind(abs, this.toAbsolute(rel));
			return true;
		}
		if(rel instanceof Array) {
			if(!(abs instanceof Array))
				return false;
			if(rel.length != abs.length)
				return false;
			for(var i = 0; i < rel.length; i++) {
				if(!this.unifyRel(rel[i], abs[i]))
					return false;
			}
			return true;
		}
		return rel == abs;
	};
	this.unify = function(term1, term2) {
console.log('unifying ' + JSON.stringify(term1) + ' and '  + JSON.stringify(term2));
		term1 = this.deref(term1);
		term2 = this.deref(term2);
		if(term1.ref) {
			this.bind(term1, term2);
			return true;
		}
		if(term2.ref) {
			this.bind(term2, term1);
			return true;
		}
		if(term1 instanceof Array) {
			if(!(term2 instanceof Array))
				return false;
			if(term1.length != term2.length)
				return false;
			for(var i = 0; i < term1.length; i++) {
				if(!this.unify(term1[i], term2[i]))
					return false;
			}
			return true;
		}
		return term1 == term2;
	};
	this.toAbsolute = function(rel) {
		if(rel.id) {
			var addr = this.SP + rel.id;
			this.allocateFrame(addr);
			return this.deref({ref: addr});
		} else if(rel instanceof Array) {
			var abs = []
			for(var i = 0; i < rel.length; i++) {
				abs.push(this.toAbsolute(rel[i]));
			}
			return abs;
		} else {
			return rel;
		}
	};
	this.call = function(goal) {
		var s = this.getState();
		this.SP = this.NF;
		this.NF = this.SP + 1;
		while(true) {
console.log(JSON.stringify(goal));
			if(goal.length == 1) {
				if(goal[0] == 'true') {
					this.setState(s);
					return true;
				}
				if(goal[0] == 'fail') {
					this.setState(s);
					return false;
				}
			} else if(this.builtins[goal[0]]) {
				var builtin = this.builtins[goal[0]];
				goal = builtin.apply(this, goal.slice(1));
			} else {
				var clauses = this.program.findMostSpecific([':-', goal, 0], this);
				if(clauses.length == 0) {
					this.setState(s);
					return false;
				}
				if(clauses.length > 1)
					throw Error('Non-deterministic solution for ' + JSON.stringify(goal));
				var clause = clauses[0].st;
				var head = clause[1];
				var body = clause[2];

				if(!this.unifyRel(head, goal)){
					this.setState(s);
					return false;
				}
				goal = this.concrete(this.toAbsolute(body));
				//this.SP = this.NF; // Added just for debugging.
				this.NF = this.SP + 1;
			}
		}
	};
	this.concrete = function(term) {
		term = this.deref(term);
		if(term instanceof Array) {
			var newTerm = [];
			for(var i = 0; i < term.length; i++) {
				newTerm.push(this.concrete(term[i]));
			}
			return newTerm;
		}
		return term;
	};
	this.getState = function() { return {SP: this.SP, NF: this.NF}; }
	this.setState = function(state) {
		this.SP = state.SP;
		this.NF = state.NF;
	};
	this.protect = function(fn) {
		var s = this.getState();
		var res = fn();
		this.setState(s);
		return res;
	}
}

function createBuiltins() {
	return {
		',': function(first, rest) {
			if(this.call(first))
				return rest;
			else
				return ['fail'];
		}
	};
}
