var mongo = require('mongodb'),
	MongoClient = require('mongodb').MongoClient,
	fs = require('fs');

var	config = JSON.parse(fs.readFileSync('config.json'));

var host = config.mongo.host;
var port = mongo.Connection.DEFAULT_PORT;
var dbUrl = "mongodb://" + host + ":" + port + "/nodejs-app";
// var db = new mongo.Db('nodejs-app', new mongo.Server(host, port, {}));

// db.open(function(err){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log('Conected: ' + host + port)
// 	}

// });

MongoClient.connect(dbUrl, function(err, _db) {
    // Save the db reference
    db = _db;

    // Return the callback
    return db;
});
