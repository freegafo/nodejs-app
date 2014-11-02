var Users = require('../models/users');
var locals = {};

exports.index = function (req, res, next) {
	Users.getAllUsers(function (err, users){
		// console.log('err: ' + err);
		// console.log('users: ' + users);
		locals.users = users;
	});
	return res.render('users', locals);
};