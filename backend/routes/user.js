const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  resetPassword,
  listFriends,
  addFriend, 
  removeFriend
  } = require("../controllers/userController");

const{ 
  newPost, 
  likePost, 
  deletePost, 
  listPost, 
  searchPostsandFriends
} = require("../controllers/postController");

//UserController endpoints

router.post("/login", loginUser);

router.post("/signup", signUpUser);

router.post("/reset-password", resetPassword);

router.post("/profil/listFriends", listFriends);

router.post("/home/addFriends", addFriend);

router.post("/home/removeFriend", removeFriend);


//PostController endpoints

router.post("/home", newPost);

router.post("/home/deletePost", deletePost);

router.post("/profil/listPost", listPost);

router.post("/home/likePost", likePost);

router.post("/home/searchPostsandFriends", searchPostsandFriends);


module.exports = router;
