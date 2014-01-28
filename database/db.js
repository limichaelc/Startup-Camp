var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/scratch'); // specifies how to connect to db
var db = mongoose.connection; // this actually connects to db
exports.connect = db; // this allows other scripts to pull info from this file

exports.connect = connect;

var Schema = mongoose.Schema; // this isn't really necessary, just helps abbr

var userSchema = Schema({
    "username": String,
    "password": String 
});

var User = mongoose.model('User', userSchema);
exports.User = User;

