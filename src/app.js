'use strict';

var express = require('express');
var app= express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var loger = require('morgan');
var path = require('path');
var helmet = require('helmet');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

require('../config').development;

app.use(express.static(__dirname + '/public'));
app.use(loger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.disable('x-powered-by');
app.use(session({
    name: 'db',
    secret: 'my secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));
app.use(passport.initialize());
app.use(passport.session());
var user = require('./models/user');
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use('/', require('./routes/index'));

module.exports = app;