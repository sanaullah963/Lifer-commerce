const express = require("express");
const {
  signupControl,
  loginControl,
  verifyToken,
  haveUserControl,
  userAddressControl,
  addressAndOrderControl,
} = require("../controllers/user");
const auth = require("../util/auth");

const router = express.Router();
router.post("/signup", signupControl);
router.post("/login", loginControl);
router.get("/verify-token", verifyToken);
router.get("/user-name", haveUserControl);
router.post("/user-address", auth, userAddressControl);
router.get("/address-and-order",auth, addressAndOrderControl);
module.exports = router;
