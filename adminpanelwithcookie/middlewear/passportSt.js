const passport =  require("passport")
const schema = require("../model/Firstschema")
const localst =  require("passport-local").Strategy;//claas s
passport.use("local",new localst(
    {usernameField : "email"},
    async(email,password,done)=>{
      let admin = await schema.findone({email :email});
      if(admin){
        if(admin.password == password){
            return done(null,admin)
        }
        else{
            return done(null,false)
        }
      }else{
        return  done(null,false)
      }
      
    }
))
passport.serializeUser((admin,done)=>{
   done(null,admin.id)
})
passport.deserializeUser(async(adminId,done)=>{
    let admin = await schema.findone(adminId);
    if(admin){
        done(null,admin)
    }
    else{
        done(null,false)
    }
})
module.exports = passport