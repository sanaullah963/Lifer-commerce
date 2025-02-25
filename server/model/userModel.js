const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  numberORemail: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: Object,
    require: false,
    name: {
      type: String,
    },
    number: {
      type: String,
    },
    district: {
      type: String,
    },
    upazila: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  insartDate: {
    type: Number,
    require: true,
    default: Date.now(),
  },
  orderProduct:{
    type:Array,
    require:false,
  }
});
module.exports = mongoose.model("user", userModel);
