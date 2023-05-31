const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    googleId: { type: String, required: false },
    name: { type: String, required: [true, "Please provide a name"] },
    avatar: { type: String, required: false },
    email: { type: String, required: [true, "Please provide an Email"] },
    password: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema, "users");
