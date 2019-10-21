const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');

const app = express();

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


//Middleware
app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Chores app listening on port ${port}`);
})