const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  pseudo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  follower: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  post: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  dateCreated: Date,
});



userSchema.statics.signUp = async function (email, password, pseudo) {
  const exists = await this.findOne({ email });

  if (email === "" || password === "") {
    throw Error("Email or password is empty");
  }

  if (exists) {
    throw Error("Email already exists");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email: email,
    password: hash,
    pseudo: pseudo,
    dateCreated: Date.now(),
  });
  return user;
};

userSchema.statics.logIn = async function (email, password) {
  if (email === "") {
    throw Error("Email is empty");
  }
  if (password === "") {
    throw Error("Password is empty");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Email not exists in our database");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Password is not correct");
  }

  return user;
};




//User pseudo to find the user
// userSchema.statics.findUser = async function (pseudo) {

//   if (!user) {
//     throw Error("User not exists in our database");
//   }
//   console.log("user trouvé", user);
//   return user;

// };



userSchema.statics.listFriends = async function (follower, following) {
  const user = await this.findOne({ follower, following });

  if (!user) {
    throw Error("User not exists in our database");
  }

  return user;
};

userSchema.statics.listPost = async function (post) {
  const user = await this.findOne({ post });

  if (!user) {
    throw Error("User not exists in our database");
  }
  
  return user;
};




module.exports = mongoose.model("User", userSchema);
