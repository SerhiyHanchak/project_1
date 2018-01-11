'use strict';

module.exports = function(app) {
    var logger = require('morgan');

    app.get('/'/*,isAuth*/, function (req, res) {
        res.sendfile('index.html');
    });
    app.use('/user',require('./user'));

    app.use(require('../utils/notFoundHandler'));
    app.use(require('../utils/errorHandler'));
/*
    function isAuth(req, res, next){
        if(req.isAuthenticated()){
            return next;
        }
        res.redirect('user/login')
    }*/
};

