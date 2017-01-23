"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userModel = new Schema ({
    username : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});


userModel.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userModel);
