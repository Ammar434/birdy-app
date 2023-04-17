const User = require("../models/UserModel");
const Post = require("../models/PostModel");


//sortie : JSON avec la liste des post 
const listPost = async (req, res) => {
  try {
    const posts = await User.listPosts(req.id);
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue dans la liste post." });
    res.status(400).json({ error: error.message });
  }
};


//Sortie JSON  des nouveaux posts
const newPost = async (req, res) => {
  const { content, userId } = req.body;

  try {
    // Appeler la méthode addPost du schéma Post pour créer un nouveau tweet
    const post = await Post.addPost(content, userId);
    //201 car creation d'un nouveau post 
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue dans le newPost." });
  }
};

  
//sortie JSON avec la suppression d'un post
const deletePost = async (req, res) => {
  const { postId } = req.body;
  try {
    const post = await Post.deletePost(postId);
    res.status(200).json({ message: "Post supprimé" });
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue dans la suppression du post." });
  };
}

const likePost = async (req, res) => {
  const { postId, userId } = req.body;

  try {
    // Appeler la méthode addPost du schéma Post pour créer un nouveau tweet
    const post = await Post.likePost(postId, userId);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue dans le like Post." });
  }
};


const searchPostsandFriends = async (req, res) => {
  const query = req.query;  // récupère le terme de recherche de l'utilisateur
  try {
    const sortedPosts = await searchAll(query);
    res.status(200).json(sortedPosts);
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue dans la recherche Post and Friends." });
  }
};



  module.exports = { newPost, likePost, deletePost, listPost, searchPostsandFriends };