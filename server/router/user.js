const express = require("express");
const { signupControl,loginControl,verifyToken,haveUserControl } = require("../controllers/user");

const router = express.Router();
router.post("/signup", signupControl);
router.post('/login',loginControl)
router.get('/verify-token',verifyToken)
router.get('/user-name',haveUserControl)
module.exports = router;
