const mongoose = require("mongoose");

const orderModel = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  userAddress: {
    type: Object,
    require: true,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  productList: {
    type: Array,
    require: true,
  },
});

module.exports = mongoose.model("order", orderModel);
