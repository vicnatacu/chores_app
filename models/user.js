const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({
    email: {
        type: String,
        required: true,
    }
});

// plugin the passort-local-mongoose middleware with our User schema
User.plugin(passportLocalMongoose);

module.exports = mongoose.model("Users", User)