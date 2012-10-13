// Node.js application module for performing logic operations (querying data predicates and running procedures) on "domains",
// which are Cedalion programs loaded on a known HTTP server.

var nodeUtils = require('./node-util');
var http = require('http');
var urlParse = require('url').parse;
var fs = require('fs');

module.exports = function(couchURL) {
	var DI = new nodeUtils.DI("domains");
	DI.readStream(fs.createReadStream(__dirname + "/logic.js"), "__logicCode");
	DI.requestDomain = function(domName) {
		if(DI[domName + "_logic"]) {
			return;
		}
		DI.httpGet("http://" + domName + "/cedalion.js", domName + "_code");
		DI.httpGetJSON(couchURL + "/static/" + domName, domName + "_info");
		
		// Generate the logic object
		DI.on(["__logicCode", domName + "_code", domName + "_info"], function(DI) {
			eval(DI["__logicCode"]);
			eval(DI[domName + "_code"]);
			logic.ctx("db").bind(DI[domName + "_info"].db, logic);
			logic.ctx("tracing").bind(function(str) { console.log(str); }, logic);
			DI.setValue(domName + "_logic", logic);
		});
		// Verify the database
		DI.on([domName + "_logic", domName + "_info", "__logicCode", domName + "_code"], function(DI) {
			var pred = ["cjs#verifyDatabaseRev",
				DI[domName + "_info"].db,
				DI["__logicCode"] + DI[domName + "_code"],
				DI[domName + "_info"]._rev];
			DI[domName + "_logic"].runProcedure(["/javascript/statepred#whenever",
				pred,
				{
					func: function(logic, terms) {
						console.log(2);
						DI.setValue(domName + "_db", DI[domName + "_info"].db);
						console.log("successful");
					},
					terms: [],
					termExprs: []
				},
				{ func: function(logic) {console.log("done");}, terms: [], termExprs: []}]);
		});
	};
	return DI;
};

