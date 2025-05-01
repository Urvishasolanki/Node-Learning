const express = require("express");
const router = express.Router();
const ctl = require("../controller/ctl")
const multer = require("../middlewear/multer")
const passport = require('../middlewear/passportSt')

router.get("/",ctl.login)
router.post('/login', passport.authenticate("local", {failureRedirect : '/'}), ctl.loginData)
router.get('/logout', ctl.logout)
router.get("/dashboard", passport.checkAuth, ctl.showDashboard)
router.get("/addAdmin", ctl.addAdmin)
router.post("/addData",multer,ctl.addData)
router.get("/viewAdmin", passport.checkAuth, ctl.viewAdmin)
router.get("/deleteData",ctl.deleteData)
router.get("/editData",ctl.editData)
router.post("/updateAdmin",multer,ctl.updateAdmin)

module.exports = router;