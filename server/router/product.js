const express = require("express");
const upload = require("../util/multer");
const {
  insartProduct,
  latestProductcontrol,
  deliveryFreeProductControl,
  discountUpToControl,
  productDetailControl,
  buyConrtol,
  cartProductControl,
} = require("../controllers/product");

const auth = require("../util/auth");
const router = express.Router();

// insart Product
router.post("/insartProduct", upload.single("image"), insartProduct);
router.get("/latest-product", latestProductcontrol);
router.get("/delivery-free", deliveryFreeProductControl);
router.get("/discount-upto", discountUpToControl);
router.get("/product-detail/:_id", productDetailControl);
router.get("/buy-product", auth, buyConrtol);
router.post("/cart-product", cartProductControl);

module.exports = router;
