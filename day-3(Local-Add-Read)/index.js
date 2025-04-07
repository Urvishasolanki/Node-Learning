const express = require("express")
const port = 1008;

const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}));

let students = [
    { id: 1, name: "urvisha", subject: "CEO", city: "RAJKOT" }
];

app.get("/",(req,res)=>{
    res.render("index", { students })
})
app.get("/deleteData/:id",(req,res)=>{

    console.log("ID to delete:", req.params.id);
   let newData = students.filter((item)=>item.id !== Number(req.params.id))
   students = newData;
  res.redirect("/")
    
})
app.get("/editData/:id", (req, res) => {
    console.log(req.params); 
    let singleData=students.find((item)=>item.id == req.params.id)
    res.render("edit",{singleData})

});
app.post("/addData", (req, res) => {
    students.push(req.body)
    res.redirect("/");
})
app.post("/updateData",(req,res)=>{
    console.log(req.body);
    students.forEach((item)=>{
        if(item.id == req.body.id){
            item.name=req.body.name,
            item.subject=req.body.subject
            item.city = req.body.city
        }
        else{
            item
        }
    })
    res.redirect("/")
})

app.listen(port,(err)=>{
    err?console.log(err):console.log("server started on port :" + port)
})


