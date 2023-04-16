const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  resetPassword,
  listFriends,
  listPost, 
  findUser
  } = require("../controllers/userController");

router.post("/login", loginUser);

router.post("/signup", signUpUser);

router.post("/reset-password", resetPassword);

router.post("/", findUser); 

module.exports = router;
