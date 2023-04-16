const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SIGNKEY, { expiresIn: "3h" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    //add the pseudo to the token
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signUpUser = async (req, res) => {
  const { email, password, pseudo } = req.body;
  try {
    const user = await User.signUp(email, password, pseudo);
    const token = createToken(user._id);
    const id = user._id;
    res.status(200).json({ email, token, id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const user = await User.findUserById(id);

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get the user
const findUser = async (req, res) => {
  const { pseudo } = req.body;
  try {
    const user = await UserModel.findOne({ pseudo });
    console.log("user", user);
    return user;
  } catch (error) {
    console.error("Error finding user", error);
    throw error;
  }
};

//get the list of follower and following
const getListFollowing = async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findById(id);
    const following = user.following;
    res.status(200).json({ following });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getListFollower = async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findById(id);
    const follower = user.follower;
    res.status(200).json({ follower });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addFollowing = async (req, res) => {
  const { user1Id, user2Id } = req.body;
  try {
    const user1 = await User.addFollower(user1Id, user2Id);
    const user2 = await User.addFollowing(user1Id, user2Id);
    res.status(200).json({ user1, user2 });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeFollowing = async (req, res) => {
  const { user1Id, user2Id } = req.body;
  try {
    const user1 = await User.removeFollower(user1Id, user2Id);
    const user2 = await User.removeFollowing(user1Id, user2Id);
    res.status(200).json({ user1, user2 });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get the list of post
const listPost = async (req, res) => {
  const { post } = req.body;
  try {
    const user = await User.listPost(post);
    res.status(200).json({ post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { email, previousPassword, newPassword } = req.body;
  console.log({ email, previousPassword, newPassword });
  try {
    const user = await User.resetPassword(email, previousPassword, newPassword);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  findUser,
  listPost,
  getListFollowing,
  getListFollower,
  addFollowing,
  removeFollowing,
  loginUser,
  signUpUser,
  resetPassword,
  getUserById,
};
