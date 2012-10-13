var DI = require('./node-util').DI;
var fs = require('fs');

var app = new DI("app");

app.readStream(fs.createReadStream(__dirname + "/logic.js"), "logicCode");
app.readStream(fs.createReadStream(__dirname + "/cedalion.js"), "programCode");

app.on(["logicCode", "programCode"], function() {
	eval(app.logicCode);
	eval(app.programCode);
	//logic.ctx("tracing").bind(function(msg) { console.log("TRACE: " + msg); }, logic);
	logic.runProcedure([process.argv[2]]);
});
