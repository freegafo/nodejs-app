var mongo = require('mongodb');
// TODO should be in config
var host = '127.0.0.1';
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db('nodejs-app', new mongo.Server(host, port, {}));

db.open(function(err){
	if(err){
		console.log(err);
	} else {
		console.log('Conected: ' + host + port)
	}

	db.collection('users', function(err, collection){
		console.log('Got the collection');

		collection.find({}, function(err,cursor){
			cursor.toArray(function(err, users){
				if(users.length == 0){
					console.log('No users found');
				} else {
					console.log(users);
				}
			})
		});
	});
});