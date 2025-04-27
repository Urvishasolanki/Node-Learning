const multer = require("multer");

const Storage = multer.diskStorage({
    destination :(req,file,cb)=>{
       cb(null,"uploads/")//null menas no change in default functionality //location
    },
    filename : (req,file,cb)=>{
     cb(null,file.fieldname  + "_" + Date.now())
    }
})

const upload = multer ({storage : Storage}).single("image")
//single -1
//array -2
//fields -3
module.exports = upload