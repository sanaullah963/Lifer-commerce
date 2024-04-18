const express = require("express");
const { signupControl,loginControl,verifyToken } = require("../controllers/user");

const router = express.Router();
router.post("/signup", signupControl);
router.post('/login',loginControl)
router.get('/verify-token',verifyToken)

module.exports = router;
