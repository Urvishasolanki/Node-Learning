const mongoose = require("mongoose")
const studSchema = mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    city:{
        type :String,
        require : true
    },
    image : {
        type : String,
        require : true
    }
})
const fs = mongoose.model("studwithimg",studSchema)
module.exports = fs