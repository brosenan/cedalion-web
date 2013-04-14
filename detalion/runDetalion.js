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
	var det = new Interpreter(program);
	createBuiltins(det);

/*	var Y = det.heapAllocate();
	if(!det.call(['test#fib', 10, Y])) {
		console.error('fib failed');
	}
	console.log('fib emitted ' + JSON.stringify(det.deref(Y)));*/

	try {
		var X = det.heapAllocate();
		var Y = det.heapAllocate();
		if(!det.call(['/detalion/cedalion#cedalion', ['/detalion/cedalion#test', Y], ['/detalion/cedalion#term', Y], det.heapAllocate(), X])) {
			console.error('Cedalion fib failed');
		}
		console.log('fib emitted ' + JSON.stringify(det.deepDeref(X)));
	} catch (e) {
		console.error("Error: " + e);
		console.error(e.stack);
	}

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
///*
	try {
		var unitTests = det.program.findAllMatches([":-",["/detalion/export#statement",["/bootstrap#unitTest", '_']], '_'], det).map(function(x) {
			return x.st[1][1][1];
		});
		var num = 0;
		unitTests.forEach(function(x) {
			num++;
			if(num != 65) return;
			det.resetRegs();
			x = det.unifyRead(x);
			var L = det.heapAllocate();
			console.log('[' + num + '] Running unit: ' + JSON.stringify(x));
			var success = det.call([PREFIX + 'eval', ['/detalion/cedalion#cedalion', x, ['/detalion/cedalion#dummyInst'], ['/bootstrap#number'], L], 0, 0, det.heapAllocate()]);
			console.log('[' + num + '] ' + (success ? "PASS" : "FAIL"));
		});
		
	} catch(e) {
		console.error(e);
		console.error(e.stack);
	}
//*/
});
