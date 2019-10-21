const {
    addChore
} = require('../utils/chore_utilities');

const makeChore = function (req, res) {
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

module.exports = {
    makeChore
}


