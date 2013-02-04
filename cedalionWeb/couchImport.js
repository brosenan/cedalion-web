var DI = require('./node-util').DI;
var fs = require('fs');
var urlParse = require('url').parse;
var http = require('http');
var exec = require('child_process').exec;

var dbURL = "http://localhost:5984/cedalion";

var app = new DI("app");

function createDir(path, DI, name) {
	exec('mkdir -p ' + path, function() {
		DI.setValue(name, 1);
	});
}

app.httpGetJSON(dbURL + "/_all_docs", "allDocs");
app.on(["allDocs"], function(app) {
	var rows = app.allDocs.rows;
	for(var i = 0; i < rows.length; i++) {
		var id = rows[i].id;
		var fileDI = new DI(id);
		fileDI.setValue('id', id);
		fileDI.httpGet(dbURL + "/" + encodeURIComponent(id), "content");
		var pathComponents = ('./' + id).split('/');
		pathComponents.splice(pathComponents.length - 1);
		createDir(pathComponents.join('/'), fileDI, 'path');
		fileDI.on(['path', 'content', 'id'], function(fileDI) {
			var writeStream = fs.createWriteStream("./" + fileDI.id + ".json");
			writeStream.end(fileDI.content);
		});
	}
});

