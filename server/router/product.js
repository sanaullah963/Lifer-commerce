const express = require("express");
const upload = require("../util/multer");
const { insartProduct } = require("../controllers/product");
const router = express.Router();

// insart Product
router.post("/insartProduct", upload.single("image"),insartProduct);

module.exports = router;
