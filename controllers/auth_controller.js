const passport = require('passport');
const User = require('../models/user');
const authenicate = passport.authenticate('local');

const register = function (req, res) {
    User.register(new User({
        username: req.body.username,
        email: req.body.email
    }), req.body.password, function (err) {
        if (err) {
            res.status(500);
            res.json({
                error: err
            });
        } else {
            // Log in the newly registered user
            loginUser(req, res);
        }
    });
};

// helper function
function loginUser(req, res) {
    //passport.authenicate returns a function that we will call with req, res, and a callback function
    authenicate(req, res, function (){
        console.log('authenicate', req.user.username);
        console.log('session object:', req.session);
        console.log('req.user:', req.user);
        res.status(200);
        res.json(req.user);
    });
}

const logout = function(req, res) {
    req.logout();
    console.log('logged out user');
    console.log('session object:'. req.session);
    console.log('req.user:', req.user);
    res.sendStatus(200);
}

module.exports = { 
    register,
    login: loginUser,
    logout
};