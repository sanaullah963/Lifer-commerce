const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
require("dotenv").config();
const auth = async (req, res, next) => {


  // access token
  const mainToken = req.headers?.authorization;
  if (!mainToken) {
    return res.send({ status: "error", data: "Invalid token",user:false });
  } else {
    const token = mainToken.split(" ")[1];
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    if (!_id) {
      return res.send({ status: "error", data: "Invalid token info",user:false });
    } else {
      try {
        const respons = await userModel.findOne({ _id });
        if (!respons) {
          return res.send({ status: "error", data: "Invalid User" });
        } else {
          // set user
          req.headers.user = respons._id;
        }
      } catch (err) {
        console.log("auth error", err);
      }
    }
  }
  next();
};
module.exports = auth;
