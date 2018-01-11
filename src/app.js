'use strict';

var express = require('express');
var app= express();
var engines = require('consolidate');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var loger = require('morgan');
var session = require('express-session');
var path = require('path');
var passport = require('passport');
var flash = require('connect-flash');
var helmet = require('helmet');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

require('../config').development;

app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use(loger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.disable('x-powered-by');
app.use(session({
    name: 'db',
    secret: 'secretsecret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

require('./routes/index')(app);

module.exports = app;