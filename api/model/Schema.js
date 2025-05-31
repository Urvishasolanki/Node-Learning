const mongoose = require("mongoose")

const  apiSchema =  mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
})
const Firstschema = mongoose.model("apiSchema",apiSchema)
module.exports = Firstschema