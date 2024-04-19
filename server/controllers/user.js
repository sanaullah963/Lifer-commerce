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
    return res
      .status(500)
      .send(
        `requier fild are empty ${(name, numberORemail, password, conformPass)}`
      );
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
      const exp = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
      res.cookie("token", token, { expires: exp ,httpOnly:true});
      res.send({ status: "success", data: "Signup successfull",token });
    }
  }
};
//-----------login controllers-------------
const loginControl = async (req, res) => {
  const { numberORemail, password } = req.body;
  // check field
  if (!numberORemail || !password) {
    res.send({ status: "error", data: "Empty fild not accepted" });
  } else {
    // find user && chacking password
    try {
      const findUser = await userModel.findOne({ numberORemail });
      const comparePass =
        findUser && (await bcrypt.compare(password, findUser?.password));
      if (!comparePass || !findUser) {
        return res.send({ status: "error", data: "Invalid User" });
      } else {
        const token = genaretToken({
          id: findUser._id,
          numberORemail: findUser.numberORemail,
        });
        const exp = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
        res.cookie("token", token, { expires: exp ,httpOnly:true});
        res.send({ status: "success", data: "login successfull",token });
      }
    } catch (err) {
      console.log("mongodb data fatching error", err);
    }
  }
};
// ------------ verify token -------------
const verifyToken = async (req, res) => {
  // access token
  const token = req.headers.authorization.split(" ")[1];
  const tokenInfo = jwt.verify(token, process.env.JWT_SECRET);
  // get user data
  try {
    const response = await userModel
      .findOne({ numberORemail: tokenInfo.numberORemail })
      .select({ _id: 1 });
    if (response) {
      res.cookie('token',token)
      return res.send({ user: true });
    } else {
      return res.send({ user: false });
    }
  } catch (err) {
    console.log("token verify error",err);
  }
};
const haveUserControl =async(req,res)=>{
 // access token
 const token = req.headers.authorization.split(" ")[1];
 const tokenInfo = jwt.verify(token, process.env.JWT_SECRET);
 try {
  const userinfo=await userModel.findOne({_id:tokenInfo.id}).select({name:1,numberORemail:1})
  res.send(userinfo)
 } catch (err) {
  console.log('data fatching error in sercer');
 }

}
module.exports = { signupControl, loginControl, verifyToken,haveUserControl };
