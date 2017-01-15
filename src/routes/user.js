"use strict";

var express = require("express");
var router = express.Router();

module.exports = function () {

    router.post('/', require(''));
    router.post('/login', require(''));
    router.get('/logout', require(''));

    return router;
};
