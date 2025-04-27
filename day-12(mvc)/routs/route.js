const express = require('express');
const route = express.Router();
const ctl = require('../controller/ctl')
const multer = require('../middlewear/multer')

route.get("/", ctl.firstPage)
route.post("/addData", multer, ctl.addData)
module.exports = route;