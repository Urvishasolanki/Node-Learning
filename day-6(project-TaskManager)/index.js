const express = require("express")
const port = 1008
const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}));

let  tasks = [{id: 1,task : "runnig"}]
app.get("/",(req,res)=>{
    res.render("index",{tasks})
})

app.post("/addData", (req, res) => {
    tasks.push(req.body)
    res.redirect("/")
});
app.get("/deleteData/:id",(req,res)=>{

    console.log("ID to delete:", req.params.id);
   let newData = tasks.filter((item)=>item.id != req.params.id)
   tasks = newData;
  res.redirect("/")
    
})
app.get("/editData/:id", (req, res) => {
    console.log(req.params); 
    let singleData=tasks.find((item)=>item.id == req.params.id)
    res.render("edit",{singleData})

});
app.post("/updateData",(req,res)=>{
    console.log(req.body);
    tasks.forEach((item)=>{
        if(item.id == Number(req.body.id)){
            item.task=req.body.task
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