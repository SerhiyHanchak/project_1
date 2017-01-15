'use strict';

module.exports = function (app) {

    var logger = require('morgan');

    app.get('/', function (req, res) {

        res.sendfile('start.html');
    });
};
