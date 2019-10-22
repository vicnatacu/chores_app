const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Chore = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    },
    assigned_to: {
        type: String,
        required: true,
        
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Chore", Chore);