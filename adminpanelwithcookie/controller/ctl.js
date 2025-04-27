const schema = require("../model/Firstschema")
const fs = require("fs")


module.exports.showDashboard = (req, res) => {
    res.render("dashboard");
  };

module.exports.addAdmin = (req,res) => {
  res.render("addadmin")
}
module.exports.viewAdmin =(req,res) =>{
  res.render("viewAdmin")
}
module.exports.addData = async(req,res) => {
  // console.log(req.body)
  // console.log(req.file)
  req.body.image = req.file.path
  await schema.create(req.body).then(()=>{
    res.redirect("addAdmin")
  })
}
module.exports.viewAdmin = async(req,res)=>{
  await schema.find({}).then((data)=>{
      res.render("viewAdmin", {data})
  })

}
module.exports.deleteData = async (req, res) => {
  const id = req.query.id; 
  let singleData = await schema.findById(req.query.id);
  fs.unlinkSync(singleData.image);
  await schema.findByIdAndDelete(id).then(() => {
    res.redirect("/viewAdmin"); 
  });
};
module.exports.login = (req,res)=>{
  res.render("login")
}
module.exports.loginAdmin = async(req,res)=>{
  console.log(req.body);
  
  let admin = await schema.findOne({email : req.body.email})
  if(!admin){
      return res.redirect("/")
  }
  if(admin.password == req.body.password ){ 
       res.cookie("admin",admin)
       res.redirect("/dashboard")
   }
   else{
       res.redirect("/")
   }
}
module.exports.logout = (req,res)=>{
  res.clearCookie("admin");
  res.redirect("/")

}
