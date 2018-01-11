"use strict";

var mongoose = require('mongoose');
var db = require('../db/db');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var userModel = new Schema ({
    username : {
        type: String,
        unique: true,
        required: [true,"usernameRequired"],
        maxlength:[32,"tooLong"],
        minlength:[5,"tooShort"]
    },
    password : {
        type: String,
        required:[true,"passwordRequired"]
    }
});

var User=module.exports = mongoose.model('user', userModel);
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback)
};
module.exports.getUserByUsername = function (username, callback){
    var query = {username:username};
    User.findOne(query, callback)
};
module.exports.comparePassword = function (candidatePassword, hash, callback){
       bcrypt.compareSync(candidatePassword, hash, function(err, isMatch){
        callback(null, isMatch)
    })
};
