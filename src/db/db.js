'use strict';

var mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/mydb/upload_project');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('connected', console.log.bind(console, 'succesfully connected to database'));
