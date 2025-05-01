const mongoose = require("mongoose")

const seoschema =  mongoose.Schema({
    email: {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})
const Firstschema = mongoose.model("seotheme",seoschema)
module.exports = Firstschema