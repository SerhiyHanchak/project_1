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
    },
    role: {
        type: String,
        admin: [
            true,
            false
        ],
        default: false}
});

module.exports = User;
