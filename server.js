'use strict';

var config= require('./config/index');
var db = require('./src/db/db');
var app = require('./src/app');

app.listen (process.env.PORT, function(){
    console.log("Server succesfully started on port" + process.env.PORT)
});

