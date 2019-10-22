const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');
const session = require('express-session');
const choreRouter = require('./routes/chores_routes');
const authRouter = require('./routes/auth_routes');
const passport = require('passport');

const app = express();
const MongoStore = require("connect-mongo")(session)


const dbConn = 'mongodb://localhost/chores';
// Set four properties to avoid deprecation warnings:
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });
app.use(session({
        // resave and saveUninitialized set to false for deprecation warnings
        secret: "Express is awesome",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        },
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
}));

//express session

// passport
require('./config/passport');
app.use(passport.initialize());
app.use (passport.session());

//Middleware
app.use(cors());
app.use(bodyParser.json());


app.use('/chores', choreRouter);
app.use('/auth', authRouter);


app.listen(port, () => {
    console.log(`Chores app listening on port ${port}`);
})



