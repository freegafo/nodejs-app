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

app.get('/home', function(req, res) {
	res.render('home', {name: 'Gabriel'});	
});

app.listen(
	config.port,
	config.host
);

console.log("Running at " + config.host + ':' + config.port);

// var users = {
// 	'1': {
// 		'name': 'test1 test1',
// 		'link': 'http://google.com'
// 	},
// 	'2': {
// 		'name': 'test2 test2',
// 		'link': 'http://abv.bg'
// 	}
// }

// app.get('/user/:id', function(req, res) {
// 	var user = users[req.params.id];	
// 	if(user){
// 		res.status(200).send("<a href='" + user.link + "'>" + user.name + "</a>");
// 	}else{
// 		res.status(404).send('Sorry User not found :(');
// 	}
// });

