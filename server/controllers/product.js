const express = require("express");
const uploadOnCloudinory = require("../util/cloudinory");
const ProductModel = require("../model/productModel");
const productModel = require("../model/productModel");
const userModel = require("../model/userModel");
const orderModel = require("../model/orderModel");
const e = require("express");
const deleteImgCloudinory = require("../util/deleteImgCloudinory");

// insart product
const insartProduct = async (req, res) => {
  const {
    brand,
    categories,
    detail,
    price,
    sellPrice,
    stock,
    title,
    weight,
    visibility,
    condition,
    warranty,
  } = await req.body.product;
  // upload image on cloudinory
  const uploadImageRes = await uploadOnCloudinory(req.file.path);

  const { url, public_id } = uploadImageRes;
  // //--------save on mongoDb
  const percentage = (((price - sellPrice) / price) * 100).toFixed(1);
  // delivery charge
  const charge = weight.split(",");
  let insideDhaka = 39 + Number(charge[0]);
  let outsideDhaka = 69 + Number(charge[0]);
  const newproduct = new ProductModel({
    brand,
    categories,
    detail,
    price,
    sellPrice,
    stock,
    title,
    warranty,
    imageUrl: url,
    imagePublicID: public_id,
    percentage,
    visibility,
    condition,
    deliveryCost: { outsideDhaka, insideDhaka },
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
      const similarProduct = await productModel
        .find({ categories: { $eq: product.categories } })
        .limit(20)
        .select({
          imageUrl: 1,
          sellPrice: 1,
          price: 1,
          title: 1,
          deliveryFree: 1,
          percentage: 1,
        }).sort({ _id: -1 });
      res.send({ product, similarProduct });
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
  let totaldelivary = 0;
  let totalPay = 0;
  let numberOfItem = 0;
  let discount = 0;
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
    const response = await productModel.find({ _id: allId }).select({
      title: 1,
      imageUrl: 1,
      sellPrice: 1,
      stock: 1,
      deliveryFree: 1,
      deliveryCost: 1,
    });
    if (response) {
      // map response &&
      response.map((item1) => {
        idAndQuantity.map((item2) => {
          if (item1?._id == item2?._id) {
            fullProductArr.push({ product: item1, quantity: item2?.quantity }); // insart product
            totalPrice =
              totalPrice + Number(item1?.sellPrice) * Number(item2?.quantity); // total price
            totalQuantity = totalQuantity + Number(item2?.quantity); // total quantity
            totaldelivary += item1?.deliveryCost?.outsideDhaka || 0;
            numberOfItem += 1;
            totalPay = totalPrice + totaldelivary; // total pay
          }
        });
      });
      // send res
      res.send({
        productArr: fullProductArr,
        priceDetail: {
          totalQuantity,
          totalPrice,
          totalPay,
          totaldelivary,
          discount,
        },
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
    res.send(allCart);
  } catch (err) {
    console.log("data fatching error");
  }
};
// update react
const updatereactControl = async (req, res) => {
  const { productId } = req.body;
  const { user } = req.headers;
  const update = await productModel.findOne({ _id: productId });
  // const updatee = await productModel.findOne({_id:'66320f69bae8d7b5c05f4e65'})
  if (update.react) {
    console.log("if block update", update);
  } else {
    const reactUp = new productModel({
      react: {
        total: 1,
        user: [user],
      },
    });
    const rere = await reactUp.save();
    console.log("rere", rere);
  }
  // console.log('user',reactUp);

  res.send("success");
};
// submit order
const submitOrderControl = async (req, res) => {
  const { order } = req.body;
  console.log("order is", order);
  const newOrderModel = new orderModel({
    userId: order.userID,
    userAddress: order.userAddress,
    totalPrice: order.totalprice,
    productList: order.productList,
  });
  const submited = await newOrderModel.save();
  console.log("order model", newOrderModel);
  if (!submited) {
    res.send("error");
  }
  res.send("success");
};
// admin-panel quantity
const adminDashbordControl = async (req, res) => {};

// individual order
const indivisulOrderControl = async (req, res) => {
  const { user } = req.headers;
  try {
    const orders = await orderModel.find({ userId: user }).sort({ _id: -1 });
    // Iterate through each order
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      // Iterate through each product in the productList of the current order
      for (let j = 0; j < order.productList.length; j++) {
        const product = order.productList[j];
        // Find product details based on productId
        const orderProduct = await productModel.findById(product.ProductID, {
          title: 1,
          imageUrl: 1,
          sellPrice: 1,
        });
        // Update productList with product details
        order.productList[j].ProductDetail = orderProduct;
      }
    }
    // Send the modified orders array as a response
    res.send(orders);
  } catch (err) {
    console.log("server error", err);
  }
};
// all order
const allOrderControl = async (req, res) => {
  try {
    const orders = await orderModel.find().sort({ _id: -1 });
    // Iterate through each order
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      // Iterate through each product in the productList of the current order
      for (let j = 0; j < order.productList.length; j++) {
        const product = order.productList[j];
        // Find product details based on productId
        const orderProduct = await productModel.findById(product.ProductID, {
          title: 1,
          imageUrl: 1,
          sellPrice: 1,
        });
        // Update productList with product details
        order.productList[j].ProductDetail = orderProduct;
      }
    }
    // Send the modified orders array as a response
    res.send(orders);
  } catch (err) {
    console.log("server error", err);
  }
};
// admin dashbord all product
const adminAllProductControl = async (req, res) => {

  try {
    const allProduct = await productModel.find().sort({ _id: -1 });
    const user = await userModel.findById(req.headers.user,{numberORemail:1});
    res.send({allProduct,user});
  } catch (err) {
    console.log("server error", err);
  }
}
// delete product
const deleteProductControl = async (req, res) => {
  const { _id } = req.params;
  try {
    // find product
    const findProduct = await productModel.findById(_id);
    if (!findProduct) {
      return res.send({ status: "error", data:"Product not found" });
    }
    // delete image from cloudinory
    await deleteImgCloudinory(findProduct.imagePublicID);
    // delete product
    const deleteProduct = await productModel.findByIdAndDelete(_id);
    if (!deleteProduct) {
      return res.send({ status: "error", data: "Invalid product" });
    }
    res.send({ status: "success", data: "Product deleted successfully" });
  } catch (err) {
    console.log("server error", err);
  }
}
// delete order
const deleteOrderControl = async (req, res) => {
  const { _id } = req.params;
  try {
    // find order
    const findOrder = await orderModel.findById(_id);
    if (!findOrder) {
      return res.send({ status: "error", data: "Order not found" });
    }
    // delete order
    const deleteOrder = await orderModel.findByIdAndDelete(_id);
    if (!deleteOrder) {
      return res.send({ status: "error", data: "Invalid order" });
    }
    res.send({ status: "success", data: "Order deleted successfully" });
  } catch (err) {
    console.log("server error", err);
  }
}

module.exports = {
  insartProduct,
  latestProductcontrol,
  deliveryFreeProductControl,
  discountUpToControl,
  productDetailControl,
  buyConrtol,
  cartProductControl,
  updatereactControl,
  submitOrderControl,
  adminDashbordControl,
  indivisulOrderControl,
  allOrderControl,
  adminAllProductControl,
  deleteProductControl,
  deleteOrderControl,
};
