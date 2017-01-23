'use strict';

var mongoose = require ('mongoose');
var db;

mongoose.connect('mongodb://localhost/mydb');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
module.exports = db;
