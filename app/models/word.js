// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var wordSchema = new Schema({
  word: String,
  translate: String
});

// the schema is useless so far
// we need to create a model using it
var Word = mongoose.model('Word', wordSchema);

// make this available to our users in our Node applications
module.exports = Word;