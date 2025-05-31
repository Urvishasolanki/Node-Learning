const userSchema = require('../model/userSchema')

module.exports.addData = async (req, res) => {
    await userSchema.create(req.body).then((data) => {
        res.status(200).json({ msg: "Data added successfully!", data: data })
    })    
}

module.exports.getData = async (req, res) => {
    await userSchema.find({}).then((data) => {
        res.status(200).json({ msg: "Data geted successfully!", data: data })
    })
}

module.exports.deleteData = async (req, res) => {
    await userSchema.findByIdAndDelete(req.query.id).then((data) => {
        res.status(200).json({ msg: "Data deleted successfully!", data: data })
    })
}

module.exports.updateData = async (req, res) => [
    await userSchema.findByIdAndUpdate(req.query.id, req.body).then((data) => {
        res.status(200).json({ msg: "Data updated successfully!", data: data })
    })
]