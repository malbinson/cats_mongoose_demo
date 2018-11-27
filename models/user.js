// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// create a model using schema
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
