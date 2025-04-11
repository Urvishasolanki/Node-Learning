const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    id : {
        type : String,
        required : true
     },
    name: {
        type : String,
        required : true

    },
    city : {
        type : String,
        required : true

    },
     subject: {
        type : String,
        required : true

    }
})


const FirstSchema = mongoose.model("student",Schema)
module.exports= FirstSchema