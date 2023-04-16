const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SIGNKEY, { expiresIn: "3h" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

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

    console.log("pas de problème, voici le pseudo", pseudo);
    res.status(200).json({ email, token, pseudo: user.pseudo });
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



//get the user
const findUser = async (req, res) => {
  const { pseudo } = req.body;
  try {
    const user = await UserModel.findOne({ pseudo });
    console.log("user", user)
    return user;
  } catch (error) {
    console.error("Error finding user", error);
    throw error;
  }
};


//get the list of follower and following
const listFriends = async (req, res) => {
  const { follower, following } = req.body;

  try {
    const user = await User.listFriends(follower, following);
    res.status(200).json({ follower, following });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//get the list of post 
const listPost = async (req, res) => {
  const { post } = req.body;
  try {
    const user = await User.listPost(post);
    res.status(200).json({ post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const resetPassword = async (req, res) => {
  const { email, password } = req.body;
};


module.exports = { findUser, listPost, listFriends, loginUser, signUpUser, resetPassword };
