const express = require("express");
const router = express.Router();
const ctl = require("../controller/ctl")
const multer = require("../middlewear/multer")

router.get("/",ctl.login)
router.post("/login",ctl.loginAdmin)
router.get("/logout",ctl.logout)
router.get("/dashboard",ctl.showDashboard)
router.get("/addAdmin",ctl.addAdmin)
router.get("/viewAdmin",ctl.viewAdmin)
router.post("/addData",multer,ctl.addData)
router.get("/deleteData",ctl.deleteData)
module.exports = router;