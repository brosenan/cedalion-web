var logic = require('./cedmod');
var fs = require('fs');

//logic.ctx("tracing").bind(function(msg) { console.log("TRACE: " + msg); }, logic);
try {
	logic.runProcedure([process.argv[2]]);
} catch(e) {
	console.log("Error: " + e);
}
