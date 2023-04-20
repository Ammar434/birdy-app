const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser, 
  getPseudoById,
  getListFollowing, 
  getListFollower, 
  addFollowing, 
  removeFollowing, 
  getUserById, 
  resetPassword,
  listUsers
  } = require("../controllers/userController");

const{ 
  newPost, 
  likePost, 
  removelikePost,
  deletePost, 
  listPost, 
  searchPostsandFriends,
  listPostAll
} = require("../controllers/postController");

//UserController endpoints

router.post("/login", loginUser);

router.post("/signup", signUpUser);

router.post("/profil/getUserById", getUserById);

router.post("/profil/getPseudoById", getPseudoById);

router.post("/reset-password", resetPassword);

router.post("/profil/listfollowing", getListFollowing);

router.post("/profil/listfollower", getListFollower);

router.post("/profil/addfollowing", addFollowing);

router.post("/profil/removefollowing", removeFollowing);

router.post("/listUser", listUsers); 

//PostController endpoints

router.post("/home", newPost);

router.get("/profil/listPost", listPost);

router.post("/home/deletePost", deletePost);

router.get("/home/listPostAll", listPostAll);

router.post("/home/likePost", likePost);

router.post("/home/removelikePost", removelikePost);

router.post("/home/searchPostsandFriends", searchPostsandFriends);


module.exports = router;
