const schema = require("../model/FirstSchema")
const fs = require("fs")

module.exports.showDashboard = (req, res) => {
    res.render("dashboard");
  };
  module.exports.login = (req,res)=>{
    res.render("login")
  }

  module.exports.loginData = async (req, res)=>{
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