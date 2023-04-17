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
    const id = user._id;
    const token = createToken(user._id);
    res.status(200).json({ email, token, id});
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

    console.log("pas de problème, voici le pseudo", pseudo);
    res.status(200).json({ email, token, pseudo: user.pseudo });
  
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

const findUser = async (req, res) => {
  const { pseudo } = req.body;
  try {
    const user = await UserModel.findOne({ pseudo });
    return user;
  } catch (error) {
    console.error("Error finding user", error);
    throw error;
  }
};



// méthode pour récupérer la liste des amis de l'utilisateur et renvoyer une réponse HTML
//Sortie HTML avec la liste des amis
const listFriends = async (req, res) => {
  try {
    const user = await User.findById(req.id).populate('follower following');
    if (!user) {
      res.status(404).send('User not found');
      return;
    }
    const friends = [...user.follower, ...user.following];
    let html = '<h1>Friends List</h1>';
    html += '<ul>';
    friends.forEach(friend => {
      html += `<li>${friend.pseudo}</li>`;
    });
    html += '</ul>';
    res.send(html);
  } catch (error) {
    console.error('Error retrieving user\'s friends', error);
    res.status(500).send('Internal Server Error');
  }
};


// Sortie : HTML avec la suppression d'un ami
const removeFriend = async (req, res) => {
  try {
    const { id } = req.id; 
    const { friendId } = req.body;
    
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");

    const friendIndex = user.follower.findIndex(followerId => followerId.toString() === friendId.toString());
    if (friendIndex === -1) throw new Error("Friend not found");

    user.follower.splice(friendIndex, 1);
    await user.save();

    res.send(`<h1>Vous avez supprimé de vos amis:  ${friendId}.</h1>`);
  } catch (error) {
    console.error("Error removing friend", error);
    res.status(500).send("<h1>Error removing friend</h1>");
  }
};

// Sortie : HTML avec l'ajout d'un ami
const addFriend = async (req, res) => {
  try {
    const { id } = req.id;
    const { friendId } = req.body;

    const user = await User.findById(id);
    if (!user) throw new Error("User not found");

    const friendUser = await User.findById(friendId);
    if (!friendUser) throw new Error("Friend not found");

    if (user.follower.indexOf(friendId) !== -1) throw new Error("Friend already exists");

    user.follower.push(friendUser._id);
    await user.save();

    res.send(`<h1> Vous avez ajouter ${friendId} à vos amis.</h1>`);
  } catch (error) {
    console.error("Error adding friend", error);
    res.status(500).send("<h1>Error adding friend</h1>");
  }
};

//Question : Est-ce obligatoire de retourner un HTML ? Parce que pas optimal
const getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('follower following');
    const friends = [...user.follower, ...user.following];

    let friendsHtml = '<h1>Friends</h1><ul>';
    friends.forEach((friend) => {
      friendsHtml += `<li><strong>${friend.pseudo}</strong> - ${friend.email}</li>`;
    });
    friendsHtml += '</ul>';

    res.status(200).send(friendsHtml);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const resetPassword = async (req, res) => {
  const { email, password } = req.body;
};


module.exports = { loginUser, signUpUser, getUserById, findUser, listFriends, removeFriend, addFriend, resetPassword, getFriends};
