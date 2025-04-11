const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity :{
        type : String,
        required : false
    }
})


const FirstSchema = mongoose.model("product",Schema)
module.exports= FirstSchema