'use strict';

var Joi = require('joi');

var schemaCreate;
var schemaLogin;
var update;

schemaCreate = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    age: Joi.number().required()
});

schemaLogin = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string().required()
});

update = Joi.object().keys({
    login:Joi.string().required(),
    password:Joi.string.required()
});

module.exports = {
    create: schemaCreate,
    login: schemaLogin,
    update: update
};
