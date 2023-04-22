const User = require("../models/UserModel");
const Post = require("../models/PostModel");


//OK 
//sortie : JSON avec la liste des post 
const listPost = async (req, res) => {
  const userPostId = req.body;

  try {
    const posts = await Post.listPosts(userPostId.userId);
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue dans la liste post." });
    res.status(400).json({ error: error.message });
  }
};


const listPostAll = async (req, res) => {

  try {
    const posts = await Post.listPostsAll();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue dans la liste post." });
    res.status(400).json({ error: error.message });
  }
};


//OK
//Sortie JSON  des nouveaux posts
const newPost = async (req, res) => {
  const { content, userId } = req.body;
 
  if (!content) {
    return res.status(400).json({ message: "Le contenu du post est vide." });
  }
  try {
    // Appeler la méthode addPost du schéma Post pour créer un nouveau tweet
    const post = await Post.addPost(content, userId);
    //201 car creation d'un nouveau post 
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    console.log("erreur newPost", req.body);
    res.status(500).json({ message: "Une erreur est survenue dans le newPost." });
  }
};

//OK
//sortie JSON avec la suppression d'un post
//Prends en paramètre l'id du post à supprimer et non l'id de l'utilisateur
const deletePost = async (req, res) => {
  const postId  = req.body;

  try {
    await Post.deletePost(postId._id);
    res.status(200).json({ message: "Post supprimé" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue dans la suppression du post." });
  };
}

//OK mais un peu lent 
const likePost = async (req, res) => {
  const postId = req.body._idPost;
  const userId = req.body._idUser;

  try {
    // Appeler la méthode addPost du schéma Post pour créer un nouveau tweet
    await Post.likePost(postId,userId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue dans le like Post." });
  }
};

//OK mais un peu lent
const removelikePost = async (req, res) => {
  const postId = req.body._idPost;
  const userId = req.body._idUser;
  try {
    // Appeler la méthode addPost du schéma Post pour créer un nouveau tweet
    await Post.removeLike(postId, userId);

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



  module.exports = { newPost, likePost, listPostAll, removelikePost, deletePost, listPost, searchPostsandFriends };