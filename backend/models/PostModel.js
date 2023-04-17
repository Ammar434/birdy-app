const mongoose = require("mongoose");

const User = require("./UserModel");
const Schema = mongoose.Schema;


const postSchema = new Schema({
    content: { type: String, required: true },
    like : [{ type: Schema.Types.ObjectId, ref: "User" }], 
    dateCreated: { type: Date, default: Date.now }, 
    author: { type: Schema.Types.ObjectId, ref: "User" }
});


//add a post 
postSchema.statics.addPost = async function(content, userId) {
    // Créer un nouveau document Post
    const newPost = new this({
      content: content,
      user: userId,
    });
    
    // Enregistrer le document Post dans la collection posts
    await newPost.save();
  
    // Ajouter la référence au document Post au champ post de l'utilisateur
    await User.updateOne(
      { _id: userId },
      { $push: { post: newPost._id } }
    );
  
    return newPost;
};

//Like a post
postSchema.statics.likePost = async function (postId, userId) {
    const post = await this.findById(postId);
    if (!post) {
        throw new Error("Post not found");
    }
    await post.updateOne({ $push: { like: userId } });
    return post;
};


//Post de l'utilisateur
postSchema.statics.getPostsForUser = async function(userId) {
    const user = await User.findById(userId).populate("follower following");
    const friends = [...user.follower, ...user.following];
    const friendIds = friends.map((friend) => friend._id);
    const posts = await this.find({ user: { $in: friendIds } }).populate("user");
  
    return posts.toArray();
};


// supprimer un post
postSchema.statics.deletePost = async function (postId) {
    const post = await this.findById(postId);
    if (!post) {
        throw new Error("Post not found");
    }
    await post.remove();
    return post;
};



//Recherche de post et d'amis
postSchema.statics.searchAll = async function (query) {
    try {
      const posts = await this.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
        ],
      }).populate('author');
  
      const friends = await User.find({
        $or: [
          { pseudo: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } },
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

  





