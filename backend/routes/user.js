const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser, 
  getListFollowing, 
  getListFollower, 
  addFollowing, 
  removeFollowing, 
  getUserById, 
  findUser, 
  resetPassword, 
  } = require("../controllers/userController");

const{ 
  newPost, 
  likePost, 
  removelikePost,
  deletePost, 
  listPost, 
  searchPostsandFriends
} = require("../controllers/postController");

//UserController endpoints

router.post("/login", loginUser);

router.post("/signup", signUpUser);

router.post("/reset-password", resetPassword);

router.post("/profil/listfollowing", getListFollowing);

router.post("/profil/listfollower", getListFollower);

router.post("/profil/addfollowing", addFollowing);

router.post("/profil/removefollowing", removeFollowing);

router.post("/profil/getUserById", getUserById);

router.post("/profil/findUser", findUser);


//PostController endpoints

router.post("/home", newPost);

router.get("/profil/listPost", listPost);

router.post("/home/deletePost", deletePost);

router.post("/home/likePost", likePost);

router.post("/home/removelikePost", removelikePost);

router.post("/home/searchPostsandFriends", searchPostsandFriends);


module.exports = router;
