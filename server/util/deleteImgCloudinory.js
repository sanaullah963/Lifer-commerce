const cloudinary = require("cloudinary").v2;
require('dotenv').config()

cloudinary.config({
  cloud_name:   process.env.CLOUDINARY_NAME,
  api_key : process.env.CLOUDINARY_API_KEY,
  api_secret : process.env.CLOUDINARY_API_SECRET,
});

const deleteImgCloudinory = async (imgPublic_id) => {
  try {
    const res = await cloudinary.uploader.destroy(imgPublic_id);
    // console.log('cloudinary deleted successfull');
    return res
  } catch (err) {
    console.log('cloudinory delete error',err);
  }
}

module.exports = deleteImgCloudinory;