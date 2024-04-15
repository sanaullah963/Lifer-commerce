const express=require('express')

// signup controllers
const signupControl=(req,res)=>{
console.log(req.body);
  res.send(req.body)
}
module.exports={signupControl}