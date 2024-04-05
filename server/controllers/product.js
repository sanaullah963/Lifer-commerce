const express = require("express");

const insartProduct = async(req,res)=>{
  const data = req.body;
  console.log(req.file);
  res.send(data);
  res.send(req.file);
}

module.exports = {insartProduct}