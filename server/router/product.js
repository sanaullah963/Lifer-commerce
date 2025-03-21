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
  allOrderControl,
  adminAllProductControl,
  deleteProductControl,
  deleteOrderControl,
  orderProcessingControl,
  allProductCatagoryControl,
  singelCatagoryControl,
  productSearchControle,
  productSearchListControle,
} = require("../controllers/product");

const router = express.Router();

// insart Product
router.post("/insartProduct", upload.single("image"), insartProduct);
router.get("/latest-product", latestProductcontrol);
router.get("/delivery-free", deliveryFreeProductControl);
router.get("/discount-upto", discountUpToControl);
router.get("/product-detail/:_id", productDetailControl);
router.post("/cart-product", cartProductControl);
router.post("/update-react",auth, updatereactControl);
router.post("/submit-order",auth,submitOrderControl);
router.get('/admin/quantity',auth,adminDashbordControl);
router.get('/admin/allProduct',auth,adminAllProductControl);
//all category
router.get('/all-category',allProductCatagoryControl);
router.get('/singel-category/:category',singelCatagoryControl);
// delete product
router.delete("/delete/:_id", auth, deleteProductControl);
// order route
router.get("/buy-product", auth, buyConrtol);
router.get('/order/indivisul',auth,indivisulOrderControl);
router.get('/order/all-order',auth,allOrderControl);
router.delete('/order/delete/:_id',auth,deleteOrderControl);
router.post('/order/processing',auth,orderProcessingControl);
// search product
router.get('/search',productSearchControle);
router.get('/searchList',productSearchListControle);

module.exports = router;
