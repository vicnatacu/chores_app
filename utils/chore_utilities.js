const Chore = require('../models/chore');

const addChore = function (req) {
    return new Chore(req.body)
};

module.exports = {
    addChore
}
