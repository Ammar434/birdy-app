const mongoose = require("mongoose");

const User = require("./UserModel");
const Schema = mongoose.Schema;

//OK
const postSchema = new Schema({
  content: { type: String, required: true },
  like: [{ type: Schema.Types.ObjectId, ref: "User" }],
  likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  dateCreated: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

postSchema.statics.listPostsAll = async function () {
  const posts = await this.find().populate("author");
  return posts;
};

//OK
//add a post
postSchema.statics.addPost = async function (content, userId) {
  // Créer un nouveau document Post
  const newPost = new this({
    content: content,
    author: userId,
  });

  // Enregistrer le document Post dans la collection posts
  await newPost.save();

  // Ajouter la référence au document Post au champ post de l'utilisateur
  await User.updateOne({ _id: userId }, { $push: { post: newPost._id } });

  return newPost;
};

//OK mais des fois lent
//Like a post
postSchema.statics.likePost = async function (postId, userId) {
  const post = await this.findOneAndUpdate(
    { _id: postId, like: { $ne: userId } },
    { $push: { like: userId } },
    { new: true }
  );

  if (!post) {
    throw new Error("Post not found or already liked by user");
  }

  return post;
};

postSchema.statics.removeLike = async function (postId, userId) {
  const post = await this.findOneAndUpdate(
    { _id: postId, like: userId },
    { $pull: { like: userId } },
    { new: true }
  );

  if (!post) {
    throw new Error("Post not found or user has not liked the post");
  }

  return post;
};

//OK
//post de l'ulisateur avec son contenue
postSchema.statics.listPosts = async function (userId) {
  const userPosts = await this.find({ author: userId }).populate(
    "author",
    "pseudo"
  );
  if (!userPosts) {
    throw new Error("Posts not found");
  }
  // On récupère le contenu et l'auteur de chaque post, et on les ajoute à un objet qui sera retourné
  const postsWithContentAndAuthor = userPosts.map((post) => {
    return {
      content: post.content,
      author: post.author.pseudo,
      dateCreated: post.dateCreated,
      like: post.like,
      id: post.id,
    };
  });

  return postsWithContentAndAuthor;
};

//OK
// supprimer un post
postSchema.statics.deletePost = async function (postId) {
  const post = await this.findById(postId);
  if (!post) {
    throw new Error("Post not found");
  }
  await this.deleteOne({ _id: postId });
  await User.updateOne({ _id: post.author }, { $pull: { post: postId } });
  
  return post;
};

//A TESTER
//Recherche de post et d'amis
postSchema.statics.searchAll = async function (query) {
  try {
    const posts = await this.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
      ],
    }).populate("author");

    const friends = await User.find({
      $or: [
        { pseudo: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
      ],
    });

    const results = [...posts, ...friends];

    // Algorithme the pertinence des résultats de recherche
    // a = les post et b = friends
    const sortedResults = results.sort((a, b) => {
      const aScore = getRelevanceScore(a, query);
      const bScore = getRelevanceScore(b, query);
      return bScore - aScore;
    });

    return sortedResults;
  } catch (error) {
    throw new Error(error.message);
  }
};

//A TESTER
//Algorithme de pertinence basé sur un score pour les résultats de recherche
const getRelevanceScore = (result, query) => {
  let score = 0;
  if (result.title) {
    if (result.title.toLowerCase().includes(query.toLowerCase())) {
      score += 2;
    }
  }
  if (result.content) {
    if (result.content.toLowerCase().includes(query.toLowerCase())) {
      score += 1;
    }
  }
  if (result.pseudo.toLowerCase().includes(query.toLowerCase())) {
    score += 1;
  }
  if (result.email.toLowerCase().includes(query.toLowerCase())) {
    score += 1;
  }
  return score;
};

module.exports = mongoose.model("Post", postSchema);
