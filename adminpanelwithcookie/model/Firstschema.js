const mongoose = require("mongoose")

const adminschema =  mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})
const Firstschema = mongoose.model("admn",adminschema)
module.exports = Firstschema