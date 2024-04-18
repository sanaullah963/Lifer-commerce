const express = require("express");
const { signupControl,loginControl } = require("../controllers/user");

const router = express.Router();
router.post("/signup", signupControl);
router.post('/login',loginControl)

module.exports = router;
