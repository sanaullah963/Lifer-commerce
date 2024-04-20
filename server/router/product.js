const express = require("express");
const upload = require("../util/multer");
const { insartProduct, latestProductcontrol,deliveryFreeProductControl,discountUpToControl,productDetailControl, } = require("../controllers/product");
const router = express.Router();

// insart Product
router.post("/insartProduct", upload.single("image"),insartProduct);
router.get('/latest-product',latestProductcontrol)
router.get('/delivery-free',deliveryFreeProductControl)
router.get('/discount-upto',discountUpToControl)
router.get('/product-detail/:_id',productDetailControl)


module.exports = router;
