const express = require('express');
const router = express.Router();

const {
    makeChore,
} = require('../controller/chores_controller');

//Create
// '/chores'
router.post('/', makeChore)

module.exports = router;
