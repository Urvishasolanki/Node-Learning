const mongoose = require('mongoose');

const schema = mongoose.Schema({
    profile: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("NewStudent", schema);

module.exports = firstSchema