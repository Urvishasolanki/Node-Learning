const express =  require("express")
const db = require("./config/db")
const route = require("./routes/route")
const path = require("path")
const port = 1008
const app = express()
const passport = require('passport')
const session = require('express-session')
const connectFlash = require("connect-flash")
const flash = require("./middlewear/flash")

app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use(session({
  name : "local",
  secret : "uru",
  resave : true,
  saveUninitialized : false,
  cookie : {maxAge : 1000 * 60}
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(connectFlash())
app.use(flash.setFlash)


app.use("/", route);
app.use("/category", route);
app.listen(port,(err)=>{
  err ? console.log(err) : console.log("start on 1008")
})