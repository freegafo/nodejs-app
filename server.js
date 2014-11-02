// Load the http module to create an http server.
var fs = require('fs')
	, express = require('express')
	, doT = require('express-dot')
	, path = require('path');

var config = JSON.parse(fs.readFileSync('config.json'));
var app = express();

doT.setGlobals({
	title: 'Some Global Title'
});

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'dot');
app.engine('dot', doT.__express);

//Routes
app.use(require('./routes'));

app.listen(
	config.server.port,
	config.server.host
);

console.log("Running at " + config.server.host + ':' + config.server.port);

var mongo = require('mongodb'),
	MongoClient = require('mongodb').MongoClient;

var dbHost = config.mongo.host;
var dbPort = mongo.Connection.DEFAULT_PORT;
var dbUrl = "mongodb://" + dbHost + ":" + dbPort + "/nodejs-app";

//Connect to DB
MongoClient.connect(dbUrl, function(err, _db) {
	if(err)
		return console.log(err);
    // Save the db reference
    db = _db;
});

