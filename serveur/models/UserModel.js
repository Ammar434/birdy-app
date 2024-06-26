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

userSchema.statics.findIdByEmail = async function (email) {
  if (!email) {
    throw Error("UserId is empty");
  }

  const user = await this.findOne({ email: email });

  return user._id;
};

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

userSchema.statics.login = async function (email, password) {
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
userSchema.statics.findUserById = async function (id) {
  if (!id) {
    throw Error("UserId is empty");
  }
  const user = await this.findOne({ _id: id });

  return user;
};

//find pseudo by user id
userSchema.statics.findPseudoById = async function (id) {
  if (!id) {
    throw Error("UserId is empty");
  }
  const user = await this.findOne({ _id: id });

  return user.pseudo;
};

userSchema.statics.listPost = async function (post) {
  const user = await this.findOne({ post });

  if (!user) {
    throw Error("User does not exists in our database");
  }

  return user;
};

userSchema.statics.resetPassword = async function (
  email,
  previousPassword,
  newPassword
) {
  let user = await this.findOne({ email });
  console.log(user);
  if (!user) {
    throw Error("Email does not exists in our database");
  }

  if (!validator.isStrongPassword(newPassword)) {
    throw Error("New Password is not strong enough");
  }

  const match = await bcrypt.compare(previousPassword, user.password);

  if (!match) {
    throw Error("Password is not correct");
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(newPassword, salt);

  const filter = { email };
  const updateDoc = {
    $set: {
      password: hash,
    },
  };
  await this.updateOne(filter, updateDoc);
  user = await this.findOne({ email });

  return user;
};

// Dans la suite utilisateur est le compte courrant celui qui ajoute l'ami à l'identifiant user2Id

userSchema.statics.addFollower = async function (user1Id, user2Id) {
  let user = await this.findOne({ _id: user1Id });

  if (!user) {
    throw Error("User not exists in our database");
  }

  const filter = { _id: user1Id };
  const updateDoc = {
    $push: {
      following: [user2Id],
    },
  };
  await this.updateOne(filter, updateDoc);
  user = await this.findOne({ _id: user1Id });

  return user;
};

// user1ID retire  à l'identifiant user2Id de sa liste de following

userSchema.statics.removeFollower = async function (user1Id, user2Id) {
  let user = await this.findOne({ _id: user2Id });

  if (!user) {
    throw Error("User not exists in our database");
  }

  const filter = { _id: user2Id };
  const updateDoc = {
    $pull: {
      follower: user1Id,
    },
  };
  await this.updateOne(filter, updateDoc);
  user = await this.findOne({ _id: user1Id });
  console.log("first");
  console.log(user);

  return user;
};

// user2ID ajoute à sa liste de   à l'identifiant user2Id de sa liste de following
userSchema.statics.addFollowing = async function (user1Id, user2Id) {
  // if ({_id : user1Id} = {_id : user2Id}){
  //   console.log(user1Id)
  //   console.log(user2Id)
  //   throw Error("User cannot follow himself");
  // }
  let user = await this.findOne({ _id: user2Id });

  if (!user) {
    throw Error("User not exists in our database");
  }

  const filter = { _id: user2Id };
  const updateDoc = {
    $push: {
      follower: [user1Id],
    },
  };
  await this.updateOne(filter, updateDoc);
  user = await this.findOne({ _id: user2Id });

  return user;
};

userSchema.statics.removeFollowing = async function (user1Id, user2Id) {
  let user = await this.findOne({ _id: user1Id });

  if (!user) {
    throw Error("User not exists in our database");
  }

  const filter = { _id: user1Id };
  const updateDoc = {
    $pull: {
      following: user2Id,
    },
  };
  await this.updateOne(filter, updateDoc);
  user = await this.findOne({ _id: user2Id });

  return user;
};

module.exports = mongoose.model("User", userSchema);
