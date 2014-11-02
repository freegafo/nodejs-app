exports.index = function (req, res, nexts) {
	console.log('hello');
	
	return res.render('home', {name: 'works'});
};