const express = require("express")
const route = express.Router();
const ctl = require("../controller/categoryCtl")
const passport = require("../middlewear/passportSt")
route.get("/addcat",passport,checkAuth,)
module.exports = route