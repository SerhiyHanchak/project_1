'use strict';

var express = require('express');
var User = require('../models/user');
var router = express.Router();
/*var bcrypt = require('bcryptjs');*/
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.post('/register', require('../controllers/user/createNewUser'));
router.post('/login',
    passport.authenticate('local', {failureRedirect: '/user/login', failureFlash: 'Invalid username or passport'}),
    function (req, res) {
        req.flash('success', 'You are now logged in');
        res.redirect('/');
    });

passport.use(new LocalStrategy(function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) {
                throw err
            }
            if (!user) {
                return done(null, false, {message: 'Unknown user'})
            }
        });
        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) return done(err);
            if (isMatch) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Invalid Password'})
            }
        })
    }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});

router.get('/findAll', require('../controllers/user/findAllUsers'));

router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'You are now logout');
    res.redirect('/user/login');
});

router.patch('/update/:id/', require('../controllers/user/updateById'));

router.get('/deleteById/:id/', require('../controllers/user/deleteById'));

router.get('/find-by-id/:id/', require('../controllers/user/findUserById'));

router.delete('/deleteAll', function (req, res, callback) {
    User.remove({}, function (err, next) {
        if (err) {
            return next(err)
        }
        callback(null, {message: 'deleted'});
    })
});

module.exports = router;
