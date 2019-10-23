const {
    addChore, deleteChore, getAllChores, updateChore, getChoreById
} = require('../utils/chore_utilities');

const verifyOwner = function (req, res, next) {
    // If chore owner isn't currently logged in user, send forbidden 
    console.log('Verify Owner!! '+req.user)
    if (req.user.role == 'admin') {
        console.log('Happy')
        next();
    } else {
        getChoreById(req).exec((err, chore) => {
            if (err) {
                req.error = {
                    message: 'Chore not found',
                    status: 404
                }
                next();
            }
            console.log('user: '+req.user.username);
            console.log('chore: '+chore)
            if (req.user.username !== chore.username) {
                req.error = {
                    message: 'You do not have the permission to modify this post',
                    status: 403
                }
            }
            next();
        });
    }
}

const makeChore = function (req, res) {
    // add the username from req.user // add the username from req.user
    req.body.username = req.user.username;
    // save the Post instance from addPost
    addChore(req).save((err, chore) => {
        if (err) {
            res.status(500);
            res.json({
                error: err.message
            });
        }
        res.status(201);
        res.send(chore);
    });
};


const removeChore = function (req, res) {
    //Check for error from middleware
    if (req.error) {
        res.status(req.error.status);
        res.send(req.error.message);
    } else {
        // execute the query from deletPost
        deleteChore(req.params.id).exec((err) =>{
            if (err) {
                res.status(500);
                res.json({
                    error: err.message
                })
            }
            res.sendStatus(204);
        });
    }
};

const changeChore = function (req, res) {
    // Check for error from middleware
    if (req.error) {
        res.status(req.error.status);
        res.send(req.error.message);
    } else {
        updateChore(req).exec((err, chore) => {
            if (err) {
                res.status(500);
                res.json({
                    error: err.message
                });
            }
            res.status(200);
            res.send(chore);
        });
    }
}


const userAuthenticated = function(req, res, next) {
    console.log("user! "+req.user)
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendStatus(403)
        console.log("user authenticated is problem")

    }
}

const getChore = function (req, res) {
    getAllChores(req).
    exec((err, chores) => {
        if (err) {
            res.status(500);
            res.json({
                error: err.message
            });
        }
        res.send(chores);
    });
};
const getSingleChore = function (req, res) {
    // execute the query from getPostById
    getChoreById(req).exec((err, post) => {
        if (err) {
            res.status(404);
            res.send("Chore not found");
        }
        res.send(post);
    });
};



module.exports = {
    verifyOwner,
    makeChore,
    removeChore,
    changeChore,
    userAuthenticated,
    getChore,
    getSingleChore
}


