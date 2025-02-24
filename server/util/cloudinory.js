const cloudinary = require("cloudinary").v2;

const fs = require("fs")
require('dotenv').config()

cloudinary.config({
  cloud_name:   process.env.CLOUDINARY_NAME,
  api_key : process.env.CLOUDINARY_API_KEY,
  api_secret : process.env.CLOUDINARY_API_SECRET,
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
