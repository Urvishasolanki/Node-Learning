const express = require("express")
const port = 1008
const app = express()
const db = require("./config/db")
const route = require("./routes/route")
const path = require("path")
const passport = require("passport")
const session = require("session")

app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))
app.use("/", route);
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.use(session({
    name:"local",
    secret:"rnw",
    resave : true,
    saveUninitialized :false,
    cookie:{maxAge:100*100*60},
}))
app.use(passport.initialize())
app.use(passport.session())
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("start on port 1008")
})