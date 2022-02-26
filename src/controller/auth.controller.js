require("dotenv").config(); 
const User=require('../models/user.model')
var jwt = require('jsonwebtoken');



 const newToken=(user)=>{
    return jwt.sign({user}, "flipkart");
 }

const register =  async (req, res) => {
    
    try{
       
        let user= await User.findOne({email:req.body.email}).lean().exec();
        
       if(user== !null) return res.status(400).send({ message: "Please try another email" });
       
        user =await User.create(req.body);
       
        let x=JSON.parse(JSON.stringify(user))
        const token = newToken(user);
       // console.log(token);
        res.send({user,token});

    }
    catch(err){
     return   res.send(err.message)
    }
}

const login =  async (req, res) => {
    try{
        let  user = await User.findOne({email:req.body.email});
        if(!user) return res.send("Password or email is invalid")
     
        const match= user.checkpassword(req.body.password);

         if(!match) return res.send("Password or email is invalid");
         let x=JSON.parse(JSON.stringify(user))
         const token = newToken(user)

      return   res.send({user, token});
    }
    catch(err){
       return  res.send(err.message)
    }
}


module.exports ={register,login };

