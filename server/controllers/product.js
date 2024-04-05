const express = require("express");
const uploadOnCloudinory = require("../util/cloudinory");



const insartProduct = async (req, res) => {
  const data = req.body;
  const upres =await uploadOnCloudinory(req.file.path)
  console.log(upres);
  res.send({data,upres});
};

module.exports = { insartProduct };
