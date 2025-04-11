const express = require("express");
const db = require('./config/db');
const schema = require('./Model/FirstSchema')
const port = 1008;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async(req, res) => {
    await schema.find().then((students)=>{
       res.render("index", {students})
    })
});
app.get('/deleteData', async (req, res) => {
    console.log("Deleting ID:", req.query.id);
    await schema.findByIdAndDelete(req.query.id);
    res.redirect("/");
});
app.get('/editData', async (req, res) => {
    console.log("Editing ID:", req.query.id);
    const student = await schema.findById(req.query.id);
    res.render("edit", { student });  
});
app.post('/updateData', async (req, res) => {
    console.log("Form submitted:", req.body);  // Debug line
    const { id, name, city, subject } = req.body;
    await schema.findByIdAndUpdate(id, { name, city, subject });
    res.redirect("/");
});

app.post("/addData",async(req,res)=>{
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })
    // console.log(req.body)
})
app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port :" + port);
});
