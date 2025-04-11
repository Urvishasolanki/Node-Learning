const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
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
    qty :{
        type : String,
        required : false
    }
})


const FirstSchema = mongoose.model("product",Schema)
module.exports= FirstSchema