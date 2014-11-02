
var express = require('express')
	, router = express.Router()
	, controllers = require('./controllers');;

router.get('/', controllers.home.index);
router.get('/users', controllers.users.index);

module.exports = router;