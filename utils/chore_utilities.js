const Chore = require('../models/chore');

const addChore = function (req) {
    return new Chore(req.body)
};

const getAllChores = function (req){
    console.log('chore:'+Chore)
    return Chore.find();
}

// get post by id
// returns a quer
const getChoreById = function(req) {
    return Chore.findById(req.params.id);
}
const deleteChore = function (id) {
    return Chore.findByIdAndRemove(id);
};


const updateChore = function (req) {
    return Chore.findByIdAndUpdate(req.params.id, req.body);
}

module.exports = {
    addChore,
    getAllChores,
    getChoreById,
    deleteChore,
    updateChore
}
