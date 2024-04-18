const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const genaretToken = require("../util/genaretToken");
//--------signup controllers------------
const signupControl = async (req, res) => {
  // distructer req.body
  const { name, numberORemail, password, conformPass } = req.body;
  if (!name || !numberORemail || !password || !conformPass) {
    return res.status(500).send(`requier fild are empty ${name, numberORemail, password, conformPass}`);
  } else if (password !== conformPass) {
    return res.status(500).send(`pass not match`);
  } else {
    // check unique user
    const existingUser = await userModel.findOne({ numberORemail });
    if (existingUser)
      return res.send({ status: "error", data: "User Already exist" });
    else {
      // Hash password
      const hashPassword = await bcrypt.hash(password, 6);
      // save on mongobd
      const newuser = await userModel({
        name,
        numberORemail,
        password: hashPassword,
      });
      const user = await newuser.save();
      // genaret token
      const tokenInfo = { _id: user._id, numberORemail: user.numberORemail };
      const token = genaretToken(tokenInfo);
      // console.log(token);
      const exp = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
      res.cookie("token",token,{expires: exp,httpOnly:true})
      res.send({status:"success",data:'Signup successfull'})
      
      
    }
  }
};
//-----------login controllers-------------
const loginControl = async (req,res)=>{
  const {numberORemail,password}=req.body
// check field
  if(!numberORemail || !password){
    res.send({status:'error',data:'Empty fild not accepted'})
  }else{
    // find user && chacking password
    try {
      const findUser = await userModel.findOne({numberORemail})
      const comparePass = findUser && await bcrypt.compare(password,findUser?.password)
      if(!comparePass || !findUser){
        return res.send({status:'error',data:'Invalid User'})
      }
      else{
        const token = genaretToken({id: findUser._id, numberORemail: findUser.numberORemail})
        console.log(token);
        res.cookie('token',token)
        res.send({status:'success',data:"login successfull"})
      }
      console.log(comparePass,findUser);

      // console.log(numberORemail);
    } catch (err) {
      console.log('mongodb data fatching error',err);
    }
  
  }
  
}
module.exports = { signupControl ,loginControl};
