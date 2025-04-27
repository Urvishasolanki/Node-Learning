const express = require("express")
const port = 1008
const app = express()
const db = require("./config/db")
const route = require("./routes/route")
const path = require("path")


app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))
app.use("/", route);
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("start on port 1008")
})