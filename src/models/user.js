var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema ({
    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = User;
