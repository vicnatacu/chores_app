const express = require('express');
const router = express.Router();

const {
    makeChore,
    userAuthenticated,
    removeChore
} = require('../controllers/chores_controller');


// CREATE
// POST on '/posts'
// Creates a new post
router.post("/", userAuthenticated, makeChore);

// DELETE
// DELETE on '/posts/:id'
// Deletes a post with id
router.delete("/:id", userAuthenticated, removeChore);

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id
// router.put("/:id", userAuthenticated, changeChore);

module.exports = router;
