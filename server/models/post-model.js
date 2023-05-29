const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchyma = new Schema({
  userId: {
    ref: "User",
    type: mongoose.Types.ObjectId,
    required: true,
  },
  star: Number,
  Likes: Number,
  Liked: {
    type: Map,
    of: Boolean,
  },
  stars: Number,
});

module.exports = mongoose.model("Post", userSchema, "post");
