const express = require("express");
const upload = require("../util/multer");
const { insartProduct, latestProductcontrol,deliveryFreeProductControl } = require("../controllers/product");
const router = express.Router();

// insart Product
router.post("/insartProduct", upload.single("image"),insartProduct);
router.get('/latest-product',latestProductcontrol)
router.get('/delivery-free',deliveryFreeProductControl)

module.exports = router;
