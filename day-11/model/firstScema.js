//create image :{

const mongoose = require('mongoose')

const Schema = mongoose.Schema({
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

    },
    image : {
        type : String,
        require : true
    }
})


const FirstSchema = mongoose.model("student",Schema)
module.exports= FirstSchema