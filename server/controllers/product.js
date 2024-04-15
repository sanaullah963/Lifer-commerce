const express = require("express");
const uploadOnCloudinory = require("../util/cloudinory");

const ProductModel = require("../model/productModel");
// const { Mongoose } = require("mongoose");


// insart product
const insartProduct = async (req, res) => {
  const {brand,categories,detail,price,sellPrice,stock,title,weight,} =await req.body.product;
  // upload image on cloudinory
  // console.log(req.file);
  const uploadImageRes =await uploadOnCloudinory(req.file.path)
  // console.log(uploadImageRes);
  const {url,public_id}=uploadImageRes
  // //--------save on mongoDb
  const newproduct = new ProductModel({
    brand,categories,detail,price,sellPrice,stock,title,weight,imageUrl:url,imagePublicID:public_id
  })
  const uploadMongoRes=await newproduct.save()
  res.json({data:uploadMongoRes});
  // res.json({data:'uploadMongoRes'});

};

module.exports = { insartProduct };
