const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SIGNKEY, { expiresIn: "3h" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  try {
    //add the pseudo to the token
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token, userId: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
    
  }
};

const signUpUser = async (req, res) => {
  const { email, password, pseudo } = req.body;
  try {
    const user = await User.signUp(email, password, pseudo);
    const token = createToken(user._id);
    res.status(200).json({ email, token, pseudo });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
    console.log("user1 suit le user2", user1, user2 )

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeFollowing = async (req, res) => {
  const { user1Id, user2Id } = req.body;
  try {
    // Remove user2 from the following list of user1
    const user1 = await User.removeFollower(user1Id, user2Id);

    // Remove user1 from the followers list of user2
    const user2 = await User.removeFollowing(user1Id, user2Id);

    res.status(200).json({ user1, user2 });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//OK
const getUserById = async (req, res) => {
  const idUser = req.body; 

  try {
    const id = idUser._id;
    const user = await User.findUserById(id);

    res.status(200).json({ user });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Une erreur est survenue dans le getuserbyid." });
  }
};


//en attendant le useContext
const getIdByEmail = async (req, res) => {
  const emailUser = req.body;
  try { 
    const email = emailUser.email;
    const user = await User.findIdByEmail(email);
    res.status(200).json({ user });

  } catch (error) {
    console.log("error", error); 
    res.status(500).json({ message: " Une erreur est survenue dans le getIdByEmail. "}); 
  }
}; 


//OK
const getPseudoById = async (req, res) => {
  const idUser = req.body; 

  try {
    const id = idUser._id;
    const user = await User.findPseudoById(id);

    res.status(200).json({ user });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Une erreur est survenue dans le getPseudoById." });
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

const listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {getIdByEmail, listUsers, loginUser, signUpUser, getUserById,getPseudoById, resetPassword, getListFollowing, getListFollower, addFollowing, removeFollowing };