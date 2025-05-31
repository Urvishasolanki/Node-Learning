const schema = require("../model/Schema")

module.exports.addData = (req,res)=>{
    schema.create(req.body).then((data)=>{
        res.status(200).json({msg : "data getted successfully",data:data})
    })
}

module.exports.getData = (req,res)=>{
    schema.find({}).then((data)=>{
        res.status(200).json({msg : "data getted successfully",data:data})
    })
}
module.exports.deleteData = (req,res)=>{
    schema.findByIdAndDelete(req.query.id).then((data)=>{
        res.status(200).json({msg : "data deleted successfully",data:data})
    })
}
module.exports.updateData = (req,res)=>{
    schema.findByIdAndUpdate(req.query.id).then((data)=>{
        res.status(200).json({msg : "data Updated successfully",data:data})
    })
}
