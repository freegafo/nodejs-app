// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var express = require('express');
var config = JSON.parse(fs.readFileSync('config.json'));


var host = config.host;
var port = config.port;

var app = express();


var users = {
	'1': {
		'name': 'test1 test1',
		'link': 'http://google.com'
	},
	'2': {
		'name': 'test2 test2',
		'link': 'http://abv.bg'
	}
}



app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('Bla bla bla!');	
});

app.get('/user/:id', function(req, res) {
	var user = users[req.params.id];	
	if(user){
		res.status(200).send("<a href='" + user.link + "'>" + user.name + "</a>");
	}else{
		res.status(404).send('Sorry User not found :(');
	}
});

app.listen(port, host);


console.log("Running at " + host + ':' + port);
