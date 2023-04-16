const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  resetPassword,
  listFriends,
  listPost, 
  getMessage,
  getFriends,
  addFriend, 
  newPost, 
  removeFriend, 
  deletePost
  } = require("../controllers/userController");

router.post("/login", loginUser);

router.post("/signup", signUpUser);

router.post("/reset-password", resetPassword);

router.post("/profil/listFriends", listFriends);

router.post("/profil/listPost", listPost);

router.post("/home", newPost);

//Pas encore aboutit 
// router.post("/home/getMessage", getMessage);

// router.post("/home/getFriends", getFriends);


router.post("/home/addFriends", addFriend);

router.post("/home/removeFriend", removeFriend);

router.post("/home/deletePost", deletePost);

module.exports = router;
