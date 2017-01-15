'use strict';

var express = require('express');
var app= express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var loger = require('morgan');
var path = require('path');
var helmet = require('helmet');
var passport = require('passport');
var session = require('express-session');


require('../config').development;

app.use(express.static(__dirname + '/public'));
app.use(loger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.disable('x-powered-by');
app.use(session({
    name: 'Internet Store',
    secret: 'my secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));
app.use(passport.initialize());
app.use(passport.session());


require('./routes')(app);

module.exports = app;