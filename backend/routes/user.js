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
  listFriends,
  newPost,
  addFriend,
  removeFriend,
  deletePost,
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

router.post("/profil/listFriends", listFriends);

router.post("/profil/listPost", listPost);

router.post("/home", newPost);

//Pas encore aboutit
// router.post("/home/getMessage", getMessage);

// router.post("/home/getFriends", getFriends);

router.post("/home/addFriends", addFriend);

router.post("/home/removeFriend", removeFriend);

router.post("/home/deletePost", deletePost);
router.post("/", findUser);

module.exports = router;
