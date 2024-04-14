const cloudinary = require("cloudinary").v2;
const { log } = require("console");
const fs = require("fs")

cloudinary.config({
  cloud_name: "dc8ic7cob",
  api_key: "427848982249692",
  api_secret: "O76qjP7pESJfO8mPVtrnGL4969k",
});
const uploadOnCloudinory = async (filePath) => {
  try {
    const res = await cloudinary.uploader.upload(
      filePath,{ resource_type: "auto" }
    )
    console.log('cloudinary uploaded successfull');
    fs.unlinkSync(filePath)
    return res
  } catch (err) {
    console.log('cloudinory upload error',err);
  }
};

module.exports = uploadOnCloudinory;
