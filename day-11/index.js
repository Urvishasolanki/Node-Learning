const express = require("express");
const db = require('./config/db');
const schema = require('./model/FirstScema')
const multer = require("./middlewear/multer")
const path = require('path')
const port = 1008;
const fs =  require("fs")
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.get("/", async(req, res) => {
    await schema.find().then((students)=>{
       res.render("index", {students})
    })
});
app.get('/deleteData', async (req, res) => {
    console.log("Deleting ID:", req.query.id);
    let singleData = await schema.findById(req.query.id)///find all object
    fs.unlinkSync(singleData.image)
    await schema.findByIdAndDelete(req.query.id);
    res.redirect("/");
});
app.get('/editData', async (req, res) => {
    console.log("Editing ID:", req.query.id);
    
    const student = await schema.findById(req.query.id);
    res.render("edit", { student });  
});
app.post('/updateData', multer,async (req, res) => {    
    const student = await schema.findById(req.body.id);
    let img = '';
    req.file ? img = req.file.path : img = student.image
    req.file && fs.unlinkSync(student.image)
    req.body.image = img
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/");
    })
   
});
app.post("/addData",multer,async(req,res)=>{
    req.body.image = req.file.path
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })
})
app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port :" + port);
});
