const express = require('express');
const router = express.Router();

const {
    makeChore,
    removeChore,
    changeChore,
    verifyOwner,
    userAuthenticated,
    getChore,
    getSingleChore
} = require('../controllers/chores_controller');


// For post, delete, put -require authenticated user
// router.use(userAuthenticated);

// GET
// GET on '/chore'
// Gets a Chore
router.get("/", getChore)
router.get("/:id", getSingleChore)
router.use(userAuthenticated)
// CREATE
// POST on '/posts'
// Creates a new post
router.post("/", makeChore);

// DELETE
// DELETE on '/posts/:id'
// Deletes a post with id
router.delete("/:id", verifyOwner, removeChore);

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id
router.put("/:id", verifyOwner, changeChore);

module.exports = router;
