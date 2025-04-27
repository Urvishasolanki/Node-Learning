let schema = require("../model/firstScema")
module.exports.firstPage = async (req, res) => {
    await schema.find({}).then((data) => {
        res.render('index', {data})
    })
}
module.exports.addData = async(req,res)=>{
   await  schema.create(req.body).then(()=>{
    res.redirect('/');
})
}