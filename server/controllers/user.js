const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const genaretToken = require("../util/genaretToken");
// signup controllers
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
      const tokenInfo = { id: user._id, numberORemail: user.numberORemail };
      const token = genaretToken(tokenInfo);
      // console.log(token);
      const exp = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
      res.cookie("token",token,{expires: exp,httpOnly:true})
      res.send({status:"success",data:'Signup successfull'})
      
      
    }
  }
};
module.exports = { signupControl };
