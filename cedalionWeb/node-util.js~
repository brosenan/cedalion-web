//function DBG(x) { console.log("DBG: " + x); }
function DBG(x) { }
var events = require('events');
var http = require('http');
var fs = require('fs');
var urlParse = require('url').parse;

exports.DI = function(name) {
	this.handlers = [];
	this.on = function(dep, action) { 
		this.handlers.push({dep: dep, action: action}); 
		this.kick(); 
	};
	this.setValue = function(key, value) {
		this[key] = value;
		if(name) {
			//console.log("[" + name + "] " + key + " = ...");
		}
		this.kick();
	};
	this.kick = function() {
		for(var i = 0; i < this.handlers.length; i++) {
			var h = this.handlers[i];
			if(this.checkDependencies(h.dep)) {
				this.handlers.splice(i, 1);
				i--; // The next element now has the same index...
				h.action(this);
			}
		}
	}
	this.checkDependencies = function(dep) {
		for(var i = 0; i < dep.length; i++) {
			if(!this[dep[i]]) {
				return false;
			}
		}
		return true;
	};
	
	// Read a stream to a string
	this.readStream = function(stream, name) {
		var DI = this;
		exports.stringFromStream(stream, function(str) {
			DI.setValue(name, str);
		});
	};
	// Read a JSON stream
	this.readJSONStream = function(stream, name) {
		var DI = this;
		exports.stringFromStream(stream, function(str) {
			try {
				DI.setValue(name, JSON.parse(str));
			} catch(e) {
				console.log("Falied to parse JSON: " + e);
			}
		});
	};

	// Read from a URL
	this.httpGet = function(url, name) {
		var DI = this;
		http.get(urlParse(url), function(res) {
			DI.readStream(res, name);
		});
	};
	// Read JSON from a URL
	this.httpGetJSON = function(url, name) {
		var DI = this;
		http.get(urlParse(url), function(res) {
			DI.readJSONStream(res, name);
		});
	};
	
	// Copy an attribute from another DI
	this.copy = function(otherDI, remoteName, localName) {
		var me = this;
		otherDI.on([remoteName], function() {
			me.setValue(localName, otherDI[remoteName]);
		});
	};
};

exports.stringFromStream = function(stream, cb) {
	var str = "";
	stream.on("data", function(data) {
		//console.log('Reading: ' + data.toString('utf8'));
		str += data.toString('utf8');
	});
	stream.on("end", function() {
		cb(str);
	});
};


exports.jsonInputStream = function(stream) {
	var objStream = new events.EventEmitter();
	objStream.line = "";
	stream.on("data", function(data) {
		var str = data.toString("utf8");
		objStream.line += str;
		while(objStream.line.indexOf('\n') >= 0) {
			var index = objStream.line.indexOf('\n');
			objStream.emit("data", JSON.parse(objStream.line.substring(0,index)));
			objStream.line = objStream.line.substring(index+1);
		}
	});
	stream.on("end", function() {
		objStream.emit("end");
	});
	return objStream;
};


exports.webContentValue = function(conf, url) {
	http.get(url, function(res) {
		DBG("Got response: " + res.statusCode);
		exports.stringFromStream(res, function(str) {
			conf.setValue(url.path, str);
			if(res.headers.etag) {
				conf.setValue(url.path + "_etag", res.headers.etag);
			}
		});
	}).on('error', function(e) {
		DBG("Got error: " + e.message);
	});
	return url.path;
};
