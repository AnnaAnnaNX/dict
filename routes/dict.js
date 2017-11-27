var express = require('express');
var router = express.Router();

var Users = require('../data/users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {console.log(Users);
  res.render('dict', { title: 'Dict', users:Users });
});

module.exports = router;
