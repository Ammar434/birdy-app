const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  resetPassword,
} = require("../controllers/userController");

router.post("/login", loginUser);

router.post("/signup", signUpUser);

router.post("/reset-password", resetPassword);

module.exports = router;
