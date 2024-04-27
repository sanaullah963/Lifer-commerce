const mongoose = require("mongoose");

const ProductModel = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: false,
  },
  categories: {
    type: String,
    require: true,
  },
  detail: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  sellPrice: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  warranty: {
    type: String,
    require: true,
  },
  visibility: {
    type: String,
    require: true,
  },
  condition: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  imagePublicID: {
    type: String,
    require: true,
  },
  insartDate: {
    type: Number,
    require: true,
    default: Date.now(),
  },
  deliveryFree: {
    type: Boolean,
    default: false,
    require: true,
  },
  deliveryConst: {
    type: Object,
    insideDhaka: {
      type: Number,
    },
    outsideDhaka: {
      type: Number,
    },
    require: true,
  },
  percentage: {
    type: Number,
    require: true,
  },
});
module.exports = mongoose.model("product", ProductModel);
