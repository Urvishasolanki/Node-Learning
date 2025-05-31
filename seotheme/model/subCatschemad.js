const mongoose = require("mongoose")
const schema = mongoose.schema({
    subcatName :{
        type : String,
        required : true
    },
    catagoryId : {
        type : mongoose.schema.Types.objectId,
        ref:"category",
        required : true
    }
})
const subcatSchema = mongoose.model("Subcategory",schema);
module.exports = subcatName