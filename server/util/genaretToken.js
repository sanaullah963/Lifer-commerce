const jwt = require("jsonwebtoken");
require('dotenv').config()
function genaretToken(user){
const token = jwt.sign(user,process.env.JWT_SECRET,{expiresIn:"1d"})
return token
}
module.exports=genaretToken