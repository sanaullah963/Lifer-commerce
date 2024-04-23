const express = require("express");
const uploadOnCloudinory = require("../util/cloudinory");
const ProductModel = require("../model/productModel");
const productModel = require("../model/productModel");
const userModel = require("../model/userModel");

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
    } else {
      res.send(product);
    }
  } catch (err) {
    console.log("server error");
    return res.send({ status: "error", data: "Invalid product" });
  }
};
// buy product || order product
const buyConrtol = async (req, res) => {
  // spalit id && quanty ==> get new array
  const ids = req.headers.ids.split(",");
  const user = req.headers.user;
  let allId = [];
  let idAndQuantity = [];
  let fullProductArr = [];
  let totalQuantity = 0;
  let totalPrice = 0;
  // split id & get id
  ids.map((item) => {
    const element = item.split(".");
    idAndQuantity.push({
      _id: element[0],
      quantity: element[1],
    });
    allId.push(element[0]);
  });
  // find data
  try {
    // const address = await userModel.findById({_id:user}).select({})
    const response = await productModel
      .find({ _id: allId })
      .select({ title: 1, imageUrl: 1, sellPrice: 1, stock: 1 });
    if (response) {
      // map response &&
      response.map((item1) => {
        idAndQuantity.map((item2) => {
          if (item1._id == item2._id) {
            fullProductArr.push({ product: item1, quantity: item2.quantity }); // insart product
            totalPrice =
              totalPrice + Number(item1.sellPrice) * Number(item2.quantity); // total price
            totalQuantity = totalQuantity + Number(item2.quantity); // total quantity
          }
        });
      });
      // send res
      res.send({
        productArr: fullProductArr,
        priceDetail: { totalQuantity, totalPrice },
        user,
      });
    }
  } catch (err) {
    console.log("data fatching error", err);
  }
};
// cart data
const cartProductControl = async (req, res) => {
  const cart = req.body;
  const _id = [];
  const allCart = [];
  // get product id
  cart.map((i) => {
    _id.push(i.product);
  });
  // find product
  try {
    const data = await productModel
      .find({ _id })
      .select({ imageUrl: 1, title: 1, price: 1, sellPrice: 1, stock: 1 });
    cart.map((item1) => {
      data.map((item2) => {
        if (item1.product == item2._id) {
          allCart.push({ productList: item2, quantity: item1.quantity });
        }
      });
    });
    res.send(allCart)
  } catch (err) {
    console.log("data fatching error");
  }
};
module.exports = {
  insartProduct,
  latestProductcontrol,
  deliveryFreeProductControl,
  discountUpToControl,
  productDetailControl,
  buyConrtol,
  cartProductControl,
};
