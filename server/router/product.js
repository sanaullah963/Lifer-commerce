const express = require("express");
const upload = require("../util/multer");
const auth = require("../util/auth");
const {
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
} = require("../controllers/product");

const router = express.Router();

// insart Product
router.post("/insartProduct", upload.single("image"), insartProduct);
router.get("/latest-product", latestProductcontrol);
router.get("/delivery-free", deliveryFreeProductControl);
router.get("/discount-upto", discountUpToControl);
router.get("/product-detail/:_id", productDetailControl);
router.get("/buy-product", auth, buyConrtol);
router.post("/cart-product", cartProductControl);
router.post("/update-react",auth, updatereactControl);
router.post("/submit-order",auth,submitOrderControl);
router.get('/admin/quantity',auth,adminDashbordControl);

// order route
router.get('/order/indivisul',auth,indivisulOrderControl);



module.exports = router;
