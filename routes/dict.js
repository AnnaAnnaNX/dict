var express = require('express');
var router = express.Router();

var Word = require('../app/models/word');

router.get('/', function(req, res, next) {

  Word.find({}, function(err, words) {
    if (err) throw err;
  
    // object of all the users
    console.log(words);
    res.render('dict', { title: 'Dict', words: words });
  });

});

router.post('/', function(req, res, next) {

  var word = new Word({
    word: req.body.word,
    translate: req.body.translate
  });

  word.save(function(err) {
    if (err) throw err;
  
    console.log('User saved successfully!');
  });

  res.redirect('/dict');
});

module.exports = router;
