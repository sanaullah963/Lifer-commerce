const express = require("express");
const uploadOnCloudinory = require("../util/cloudinory");
const ProductModel = require("../model/productModel");
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
  const percentage = (((price - sellPrice) / price) * 100).toFixed(1);
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
    percentage,
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
      .sort({ _id: -1 })
      .limit(15)
      .select({
        imageUrl: 1,
        sellPrice: 1,
        price: 1,
        title: 1,
        deliveryFree: 1,
        percentage: 1,
      });
    // console.log(latestProduct);
    // latestProduct.reverse()
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
      .find({ deliveryFree: true })
      .sort({ _id: -1 })
      .limit(10)
      .select({
        imageUrl: 1,
        sellPrice: 1,
        price: 1,
        title: 1,
        deliveryFree: 1,
        percentage: 1,
      });
    // console.log(deliveryFreeProduct);
    res.send(deliveryFreeProduct);
  } catch (err) {
    console.log("data fatching server error");
  }
};
// discount up-to
const discountUpToControl = async (req, res) => {
  try {
    // find product
    const discountProduct = await productModel
      .find({ percentage: { $gte: 40 } })
      .sort({ _id: -1 })
      .limit(10)
      .select({
        imageUrl: 1,
        sellPrice: 1,
        price: 1,
        title: 1,
        deliveryFree: 1,
        percentage: 1,
      });
    // console.log(discountProduct);
    res.send(discountProduct);
  } catch (err) {
    console.log("data fatching server error");
  }
};
// product Details
const productDetailControl = async (req, res) => {
  const _id = req.params._id;
  // find product details
  try {
    const product = await productModel.findById(_id);
    if (!product) {
      return res.send({ status: "error", data: "Invalid product" });
    }else{
    res.send(product);
    } 
  } catch (err) {
    console.log("server error");
    return res.send({ status: "error", data: "Invalid product" });
  }
};
module.exports = {
  insartProduct,
  latestProductcontrol,
  deliveryFreeProductControl,
  discountUpToControl,
  productDetailControl,
};
