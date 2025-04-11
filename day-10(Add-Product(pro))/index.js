const express = require('express')
const db = require('./config/db');
const schema = require('./Model/FirstSchema')

const app = express()
const port = 1008;
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async(req, res) => {
    await schema.find().then((products)=>{
       res.render("index", {products})
    })
});
app.post("/addData",async(req,res)=>{
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })
})
app.get('/deleteData', async (req, res) => {
    console.log("Deleting ID:", req.query.id);
    await schema.findByIdAndDelete(req.query.id);
    res.redirect("/");
});
app.get('/editData', async (req, res) => {
    console.log("Editing ID:", req.query.id);
    const s_product = await schema.findById(req.query.id);
    res.render("edit", { s_product });  
});
app.post('/updateData', async (req, res) => {
     console.log(req.body)
     const { id, img, price, name,quantity } = req.body;
     await schema.findByIdAndUpdate(id, { img, price, name,quantity }).then(()=>{
        res.redirect("/");
    })
   
});
app.listen(port,(err)=>{
    err ?  console.log(err) : console.log("server started on port:",port)
 })