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

//Sortie JSON  des nouveaux posts
const newPost = async (req, res) => {
  const { userId, postId, comment } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Vérifier si le post existe
    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Ajouter le commentaire au post
    post.comments.push({ user: userId, text: comment });
    await post.save();

    res.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Error adding comment", error);
    res.status(500).json({ error: "Error adding comment" });
  }
};

// méthode pour récupérer la liste des amis de l'utilisateur et renvoyer une réponse HTML
//Sortie HTML avec la liste des amis
const listFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "follower following"
    );
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    const friends = [...user.follower, ...user.following];
    let html = "<h1>Friends List</h1>";
    html += "<ul>";
    friends.forEach((friend) => {
      html += `<li>${friend.pseudo}</li>`;
    });
    html += "</ul>";
    res.send(html);
  } catch (error) {
    console.error("Error retrieving user's friends", error);
    res.status(500).send("Internal Server Error");
  }
};

// Sortie : HTML avec la suppression d'un ami
const removeFriend = async (req, res) => {
  try {
    const { id } = req.params;
    const { friendId } = req.body;

    const user = await User.findById(id);
    if (!user) throw new Error("User not found");

    const friendIndex = user.follower.findIndex(
      (followerId) => followerId.toString() === friendId.toString()
    );
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
    const { id } = req.params;
    const { friendId } = req.body;

    const user = await User.findById(id);
    if (!user) throw new Error("User not found");

    const friendUser = await User.findById(friendId);
    if (!friendUser) throw new Error("Friend not found");

    if (user.follower.indexOf(friendId) !== -1)
      throw new Error("Friend already exists");

    user.follower.push(friendUser._id);
    await user.save();

    res.send(`<h1> Vous avez ajouter ${friendId} à vos amis.</h1>`);
  } catch (error) {
    console.error("Error adding friend", error);
    res.status(500).send("<h1>Error adding friend</h1>");
  }
};

//sortie HTML avec la suppression d'un post
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user._id;

    // Vérifier que le post existe et appartient à l'utilisateur
    const post = await PostModel.findOne({ _id: postId, user: userId });
    if (!post) {
      return res.status(404).send("<h1>Post pas trouvé</h1>");
    }

    // Supprimer le post
    await PostModel.deleteOne({ _id: postId });

    // Rediriger vers la page des posts de l'utilisateur
    res.redirect(`/users/${userId}/posts`);
  } catch (error) {
    console.error("Error deleting post", error);
    res.status(500).send("<h1>Error deleting post</h1>");
  }
};

//recherche
// const getMessage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { message } = req.body;

//   }
//   catch (error) {
//     console.error("Error finding message", error);
//     res.status(500).send("<h1>Error finding message</h1>");
//   }
// };

// const getFriends = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { friend } = req.body;
//   }
//   catch (error) {
//     console.error("Error finding friend", error);
//     res.status(500).send("<h1>Error finding friend</h1>");
//   }
// };

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
  newPost,
  listFriends,
  removeFriend,
  addFriend,
  deletePost,
};
