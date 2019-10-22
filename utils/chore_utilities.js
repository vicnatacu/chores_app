const Chore = require('../models/chore');

const addChore = function (req) {
    return new Chore(req.body)
};

const getAllChores = function (req){
    return Chore.find();
}

const deleteChore = function (id) {
    return Chore.findByIdAndRemove(id);
};

module.exports = {
    addChore,
    getAllChores,
    deleteChore
}
