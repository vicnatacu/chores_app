const Chore = require('../models/chore');

const addChore = function (req) {
    return new Chore(req.body)
};

const deleteChore = function (id) {
    return Chore.findByIdAndRemove(id);
};

module.exports = {
    addChore,
    deleteChore
}
