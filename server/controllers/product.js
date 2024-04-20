const express = require("express");
const uploadOnCloudinory = require("../util/cloudinory");
const ProductModel = require("../model/productModel");
const { Mongoose } = require("mongoose");
const productModel = require("../model/productModel");

// insart product
const insartProduct = async (req, res) => {
  const { brand, categories, detail, price, sellPrice, stock, title, weight } =
    await req.body.product;
  // upload image on cloudinory
  // console.log(req.file);
  const uploadImageRes = await uploadOnCloudinory(req.file.path);
  // console.log(uploadImageRes);
  const { url, public_id } = uploadImageRes;
  // //--------save on mongoDb
  const newproduct = new ProductModel({
    brand,
    categories,
    detail,
    price,
    sellPrice,
    stock,
    title,
    weight,
    imageUrl: url,
    imagePublicID: public_id,
  });
  const uploadMongoRes = await newproduct.save();
  res.json({ data: uploadMongoRes });
  // res.json({data:'uploadMongoRes'});
};

// latest product
const latestProductcontrol = async (req, res) => {
  try {
    // find product
    const latestProduct = await productModel
      .find()
      .sort({ createdAt: -1 })
      .limit(20)
      .select({ imageUrl:1, sellPrice:1, price:1, title:1,deliveryFree:1 });
    console.log(latestProduct);
    res.send(latestProduct);
  } catch (err) {
    console.log("data fatching server error");
  }
};
// delivery Free product
const deliveryFreeProductControl = async (req, res) => {
  try {
    // find product
    const deliveryFreeProduct = await productModel
      .find({deliveryFree:true})
      .sort({ createdAt: -1 })
      .limit(10)
      .select({ imageUrl:1, sellPrice:1, price:1, title:1,deliveryFree:1 });
    console.log(deliveryFreeProduct);
    res.send(deliveryFreeProduct);
  } catch (err) {
    console.log("data fatching server error");
  }
};

module.exports = { insartProduct, latestProductcontrol,deliveryFreeProductControl };
