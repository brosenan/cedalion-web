

var DI = require('../cedalionWeb/node-util').DI;
var fs = require('fs');

var app = new DI("app");

app.readStream(fs.createReadStream(__dirname + "/detalion.js"), "detalion");
app.readStream(fs.createReadStream(__dirname + "/detalion.jsonp"), "program");

app.on(["detalion", "program"], function() {
	eval(app.detalion);
	var program = new ProgramDatabase();
	function detalionStatement(s) {
		program.store(s);
	}
	eval(app.program);
	var jit;
	jit = new Jit({XXlifting: 1});
	var det = new Interpreter(program, jit);
	createBuiltins(det);
	app.setValue('det', det);
});

app.on(['det'], function() {
	var det = app.det;

/*	var Y = det.heapAllocate();
	if(!det.call(['test#fib', 10, Y])) {
		console.error('fib failed');
	}
	console.log('fib emitted ' + JSON.stringify(det.deref(Y)));*/

/*
	try {
		for(var i = 0; i < 1; i++) {
			var X = det.heapAllocate();
			var Y = det.heapAllocate();
			var W = det.heapAllocate();
			if(!det.call(['/detalion/cedalion#cedalion', 
				['/detalion/cedalion#test', Y], 
				['/detalion/cedalion#term', Y], 
				det.heapAllocate(), 
				['/detalion/cedalion#diffList', W, W], 
				['/detalion/cedalion#diffList', X, ['[]']]])) {
				console.error('Cedalion fib failed');
			}
			console.log('fib emitted ' + JSON.stringify(det.deepDeref(X)));
		}
	} catch (e) {
		console.error("Error: " + e);
		console.error(e.stack);
		throw e;
	}
//*/
/*	var L = det.heapAllocate();
	var X = det.heapAllocate();
	if(!det.call(['/detalion/cedalion#map', det.arrayToList([1, 2, 3]), X, ['/bootstrap#number'], L, ['x', X], ['foo']])) {
		console.error('map failed');
	}
	console.log('map emitted ' + JSON.stringify(det.deepDeref(L)));
*/	

/*	var X = det.heapAllocate();
	var Y = det.heapAllocate();
	if(!det.call(['/detalion/cedalion#cedalion', ['/detalion/cedalion#fib2', 20, Y], Y, ['/bootstrap#number'], X])) {
		console.error('Cedalion fib failed');
	}
	console.log('fib emitted ' + JSON.stringify(det.listToArray(det.deepDeref(X))));
*/
/*	var X = det.heapAllocate();
	var Y = det.heapAllocate();
	if(!det.call(['/detalion/cedalion#cedalion', ['/detalion/cedalion#toPeano', 2, Y], Y, ['/bootstrap#number'], X])) {
		console.error('Cedalion fib failed');
	}
	console.log('fib emitted ' + JSON.stringify(det.deepDeref(X)));
*/
//*
	{
		var unitTests = det.program.findAllMatches([":-",["/detalion/export#statement",["/detalion#unitTest", '_']], '_'], det).map(function(x) {
			return x.st[1][1][1];
		});
		for(var i = 0; i < 1; i++) {
			var start = (new Date()).getTime();
			var num = 0;
			unitTests.forEach(function(x) {
				num++;
				//if(num != 24) return;
				det.resetRegs();
				x = det.unifyRead(x);
				console.log('[' + num + '] Running unit: ' + JSON.stringify(x));
				var success = det.call(x);
				console.log('[' + num + '] ' + (success ? "PASS" : "FAIL"));
			});
			var end = (new Date()).getTime();
			console.log('Iteration time: ' + (end - start) + ' ms');
		}		
	}
//*/
/*
	try {
		var unitTests = det.program.findAllMatches([":-",["/detalion/export#statement",["/bootstrap#unitTest", '_']], '_'], det).map(function(x) {
			return x.st[1][1][1];
		});
		for(var i = 0; i < 3; i++) {
			var start = (new Date()).getTime();
			var num = 0;
			unitTests.forEach(function(x) {
				num++;
				if(num != 15) return;
				det.resetRegs();
				x = det.unifyRead(x);
				//var L = det.heapAllocate();
				var W = det.heapAllocate();
				console.log('[' + num + '] Running unit: ' + JSON.stringify(x));
				var success = det.call(['/detalion#eval', 
					['/detalion/cedalion#cedalion', 
						x, 
						['/detalion/cedalion#dummyInst'], 
						['/bootstrap#number'], 
						['/detalion/cedalion#diffList', W, W],
						['/detalion/cedalion#diffList', ['.', det.heapAllocate(), det.heapAllocate()], ['[]']]], 0, 0, det.heapAllocate()]);
				console.log('[' + num + '] ' + (success ? "PASS" : "FAIL"));
			});
			var end = (new Date()).getTime();
			console.log('Iteration time: ' + (end - start) + ' ms');
			//det.jit.thresholds.lifting = 100000;
		}
	} catch(e) {
		console.error(e);
		console.error(e.stack);
	}
//*/
});

app.readStream(fs.createReadStream(__dirname + "/case8d.txt"), "log");
/*
app.on(["detalion", "program", "log"], function() {
	// Create an interpreter without jit
	eval(app.detalion);
	var program = new ProgramDatabase();
	function detalionStatement(s) {
		program.store(s);
	}
	eval(app.program);
	var det = new Interpreter(program);
	createBuiltins(det);
	// Parse the log
	app.log += '{}'
	var log = app.log.split('\n').map(JSON.parse);
	for(var i = 0; i < log.length; i++) {
		console.log(i);
		if(!log[i].goal) {
			return;
		}
		var entry = log[i];
		det.resetRegs();
		var goal = det.unifyRead(entry.goal);

		det.resetRegs();
		det.unifyWrite(entry.orig[1], goal);
		var origClause = det.unifyRead(entry.orig);
		var origGoalAssignment = det.heapAllocate();
		var origRes = det.call(['/detalion#eval', origClause[2], goal, det.heapAllocate(), origGoalAssignment]);
		var origGoalText = JSON.stringify(det.toPrototype(origGoalAssignment));
		
		det.resetRegs();
		det.unifyWrite(entry.lifted[1], goal);
		var liftedClause = det.unifyRead(entry.lifted);
		var liftedGoalAssignment = det.heapAllocate();
		var liftedRes = det.call(['/detalion#eval', liftedClause[2], goal, det.heapAllocate(), liftedGoalAssignment]);
		var liftedGoalText = JSON.stringify(det.toPrototype(liftedGoalAssignment));

		if(liftedRes != origRes) {
			throw Error('Lifted and original clauses differ in result: lifted ' + (liftedRes?'succeeded':'failed') + ' while original ' + (origRes?'succeeded':'failed') +
				'\n\t{"Goal": ' + JSON.stringify(entry.goal) + '\n\t,"LiftedBound": ' + JSON.stringify(det.toPrototype(liftedClause)) + '\n\t,"OriginalBound": ' + JSON.stringify(det.toPrototype(origClause)) +
				'\n\t,"Lifted": ' + JSON.stringify(entry.lifted) + '\n\t,"Original": ' + JSON.stringify(entry.orig) + '}');
		}
		if(liftedGoalText != origGoalText) {
			throw Error('Lifted and original clauses differ in variable assignments:' +
				'\n\t{"Goal": ' + JSON.stringify(entry.goal) + '\n\t,"Lifted": ' + liftedGoalText + '\n\t,"Original": ' + origGoalText + 
				'\n\t,"LiftedClause": ' + JSON.stringify(entry.lifted) + '\n\t,"OrigClause": ' + JSON.stringify(entry.orig) + '}');
		}

		console.log(liftedRes ? 'T' : 'F');
		if(liftedRes && JSON.stringify(entry.goal) == liftedGoalText) {
			console.log('Goal succeeded without binding any variables');
		}
	}
});
//*/

