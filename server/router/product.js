const express = require("express");
const multer = require("multer");
const router = express.Router();
// multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + file.originalname)
  }
})
const upload = multer({ storage: storage })
// const upload = multer({
//   dest: "upload",
// });


// insart Product
router.post("/insartProduct", upload.single("image"), async (req, res) => {
  const data = req.body;
  console.log(req.file);
  res.send(req.file);
});

module.exports = router;
