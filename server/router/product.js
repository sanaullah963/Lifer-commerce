const express = require("express");
const multer = require("multer");
const router = express.Router();
// multer config
// const upload = multer({
//   dest: "upload",
// });
// insart Product
router.post("/insartProduct",  async (req, res) => {
  const data = req.body;
  console.log(data);
  // res.send(req.file);
});

module.exports = router;
