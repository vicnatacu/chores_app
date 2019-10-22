const passport = require('passport');
const User = require('../models/user');

passport.use(user.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
