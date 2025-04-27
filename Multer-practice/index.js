const express = require("express")
const db = require('./config/db');
const schema = require('./model/FirstScema')
const path = require('path')
const multer = require('./middlewear/multer')
const app = express()
const port = 1008;
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/addData",multer,async(req,res)=>{
    req.body.image = req.file.path
     await schema.create(req.body).then(()=>{
        res.redirect("/")
     })
})

app.listen(port,(err)=>{
   err ? console.log(err) : console.log("start on port",port);
})