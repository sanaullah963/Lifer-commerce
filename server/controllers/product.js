const express = require("express");
const uploadOnCloudinory = require("../util/cloudinory");

const ProductModel = require("../model/productModel");
const { Mongoose } = require("mongoose");


// insart product
const insartProduct = async (req, res) => {
  const {brand,categories,detail,price,sellPrice,stock,title,weight,} =await req.body.product;
  // upload image on cloudinory
  const imageUpRes =await uploadOnCloudinory(req.file.path)
  console.log(req.file);
  // const {url,public_id}=imageUpRes
console.log(imageUpRes);

  //--------save on mongoDb
  // const newproductModel = new ProductModel({
  //   brand,categories,detail,price,sellPrice,stock,title,weight,imageUrl:url,imagePublicID:public_id
  // })

  // const mongoUpRes=await newproductModel.save()
  // console.log(mongoUpRes);

  res.json({data:imageUpRes});

};

module.exports = { insartProduct };
