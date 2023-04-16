const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  resetPassword,
  getListFollowing,
  getListFollower,
  listPost,
  findUser,
  getUserById,
  addFollowing,
  removeFollowing,
} = require("../controllers/userController");

router.post("/login", loginUser);

router.post("/signup", signUpUser);

router.post("/reset-password", resetPassword);

router.post("/find-by-id", getUserById);

router.post("/get-list-following", getListFollowing);

router.post("/get-list-follower", getListFollower);

router.post("/add-following", addFollowing);

router.post("/remove-following", removeFollowing);

router.post("/add-following");

router.post("/", findUser);

module.exports = router;
