const multer = require("multer");
const uploadOnCloudinory = require("./cloudinory");

// upload on local file
const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null,)
  // },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + file.originalname)
  }
})
const upload = multer({ storage: storage })
module.exports = upload