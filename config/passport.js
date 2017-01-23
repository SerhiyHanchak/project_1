/*
"use strict";

var user = require("../src/models/user");
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;


module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    };
};

*/
