const Chore = require('../models/chore');

const addChore = function (req) {
    return new Chore(req.body)
};

const getAllChores = function (req){
    return Chore.find();
};

module.exports = {
    addChore,
    getAllChores
}
