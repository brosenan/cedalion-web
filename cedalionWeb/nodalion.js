// A Node.js server program that performs procedures and queries state predicates through HTTP interface
var nodeUtils = require('./node-util');
var fs = require('fs');
var http = require('http');
var urlParse = require('url').parse;
var gist = require('./gist').ext;

var DI = new nodeUtils.DI("nodalion");
DI.readJSONStream(fs.createReadStream(__dirname + "/nodalion.json"), "config");

// Create the domain domains collection
DI.on(['config'], function(DI) {
	DI.setValue('domains', require('./domains')(DI.config.couchURL));
});


function handleGET(DI, req, res) {
	// Proxy request to static content
	var url = req.url;
	if(url === "/") {
		url = "/index.html";
	}
	var clientOpt = urlParse(DI.config.couchURL + "/static/" + req.headers.host + url);
	clientOpt.headers = req.headers;
	http.get(clientOpt, function(clientRes) {
		if(clientRes.statusCode != 404) {
			res.writeHead(clientRes.statusCode, "Something", clientRes.headers);
			clientRes.pipe(res);
		} else {
			// If the response is 404 (not found), try openning a local file with that name.
			var fileDI = new nodeUtils.DI("fileDI");
			var filePath = __dirname + "/" + url;
			fs.stat(filePath, function(err, stat) {
				if(!err) {
					fileDI.setValue("stat", stat);
				} else {
					res.writeHead(404, err.code, clientRes.headers);
					res.end();
				}
			});
			fileDI.on(["stat"], function() {

				if(req.headers["if-none-match"] && req.headers["if-none-match"].indexOf(fileDI.stat.mtime) != -1) {
					console.log("File " + filePath + " already in cache: <" + req.headers["if-none-match"] + ">");
					res.writeHead(304, "Not Modified", {});
					res.end();
				} else {
					var stream = fs.createReadStream(filePath);
					stream.on("error", function(err) {
						res.writeHead(500, "Error", {"content-type": "text/plain"});
						res.end(err.toString());
					});
					stream.on("open", function(fd) {
						res.writeHead(200, "OK", {"content-type": gist.getContentType(gist.getExt(filePath)),
							"etag": fileDI.stat.mtime
						});
						stream.pipe(res);
					});
				}

			});
		}
	});
}

function handlePOST(DI, req, res) {
	var domName = req.headers.host;
	var reqDI = new nodeUtils.DI("req");
	DI.domains.requestDomain(domName);
	reqDI.copy(DI.domains, domName + "_logic", "logic");
	reqDI.copy(DI.domains, domName + "_db", "db");
	reqDI.readJSONStream(req, "request");
	reqDI.on(["logic", "request", "db"], function(reqDI) {
		try {
//			console.log("query: " + JSON.stringify(reqDI.request));
			reqDI.logic.runProcedure(["cjs#runService", reqDI.logic.addReferences(reqDI.request, []), req, res]);
		} catch(e) {
			res.writeHead(500, "Unknown Server Error", {"content-type": "text/plain"});
			res.end("Unknown Server Error: " + e);
		}
	});
}

// HTTP server (frontend):
// The HOST header determines the domain.
// GET -> Fetches static content for the domain
// POST -> Run a service
DI.on(['config', 'domains'], function(DI) {
	var server = http.createServer(function(req, res) {
		if(req.method == "GET") {
			handleGET(DI, req, res);
		} else if(req.method == "POST") {
			handlePOST(DI, req, res);
		} else {
			res.writeHead(405, "Method Not Allowed", {"content-type": "text/plain"});
			res.end("Method Not Allowed");
		}
	});
	server.listen(DI.config.frontend.listen);
	DI.setValue('frontend', server);
});
