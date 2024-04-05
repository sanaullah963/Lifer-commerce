const cloudinary = require("cloudinary").v2;
const fs = require("fs")

cloudinary.config({
  cloud_name: "dc8ic7cob",
  api_key: "427848982249692",
  api_secret: "O76qjP7pESJfO8mPVtrnGL4969k",
});
const uploadOnCloudinory = async (loaclFilePath) => {
  try {
    const res = await cloudinary.uploader.upload(
      loaclFilePath,{ resource_type: "image" }
    )
    console.log('uploaded successfull');
    fs.unlinkSync(loaclFilePath)
    return res
  } catch (error) {
    console.log('cloudinory upload error');
  }
};

module.exports = uploadOnCloudinory;
