const schema = require("../model/FirstSchema")
const fs = require("fs")

module.exports.showDashboard = (req, res) => {
    res.render("dashboard");
  };
  module.exports.login = (req,res)=>{
    res.render("login")
  }

  module.exports.loginData = async (req, res)=>{
   
      req.flash("success","login successful")
  
      
     res.redirect('/dashboard')
  }

  module.exports.logout = async (req, res)=>{
    req.session.destroy((error)=>{
      if(error){
        console.log(error)
      }
      else{
        res.clearCookie("local")
        res.redirect('/')
      }
    })
  }

  module.exports.addAdmin = (req,res) => {
    res.render("addadmin")
  }
  module.exports.addData = async(req,res) => {
    console.log(req.body)
    console.log(req.file)
    req.body.image = req.file.path
    await schema.create(req.body).then(()=>{
      res.redirect("addAdmin")
    })
  }
  module.exports.viewAdmin = async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("viewAdmin", {data})
    })}
    module.exports.deleteData = async (req, res) => { 
      let singleData = await schema.findById(req.query.id);
      fs.unlinkSync(singleData.image);
      await schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/viewAdmin"); 
      });
    };

    module.exports.editData = async (req, res) => {
       await schema.findById(req.query.id).then((data)=>{
          res.render("edit",{data})
       })
    }
    module.exports.updateAdmin = async(req,res) =>{
        let singleData = await schema.findById(req.body.id)
        let img = ''
        req.file ? img = req.file.path : img = singleData.image

        req.file && fs.unlinkSync(singleData.image)

        req.body.image = img

        await schema.findByIdAndUpdate(req.body.id, req.body).then(()=>{
          res.redirect('/viewAdmin')
        })
    }
    module.exports.profile =(req,res)=>{
      res.render("profile")
      }
      
      module.exports.changePass = (req, res) => {
        res.render("changePass");
      };
      
      module.exports.changePassword = async (req, res) => {
        let user = req.user;
        if (user.password == req.body.oldPass) {
          if (req.body.oldPass != req.body.newPass) {
            if (req.body.newPass == req.body.confirmPass) {
              let admin = await adminSchema.findByIdAndUpdate(user.id, {
                password: req.body.newPass,
              });
              admin && res.redirect("/logout");
            } else {
              console.log("new password and confirm password must be same");
            }
          } else {
            console.log("old password and new password must be different");
          }
        } else {
          console.log("Old password is wrong");
        }
      };
      module.exports.recoverPass = async (req, res) => {
        let admin = await adminSchema.findOne({ email: req.body.email });
        if (!admin) {
          return res.redirect("/");
        }
        let otp = Math.floor(Math.random() * 100000 + 900000);
        mailer.sendOtp(req.body.email, otp);
      
        req.session.otp = otp;
        req.session.adminData = admin;
      
        res.render("verifyOtp");
      };
      
      module.exports.verifyPass = async (req, res) => {
        let otp = req.session.otp;
        let admin = req.session.adminData;
        
        if(req.body.otp == otp){
          if (req.body.newPass == req.body.confirmPass) {
              let adminData = await adminSchema.findByIdAndUpdate(admin._id, {
                password: req.body.newPass,
              });
              adminData && res.redirect("/logout");
            } else {
              console.log("new password and confirm password must be same");
            }
        }else{
          res.redirect("/")
        }
      };      