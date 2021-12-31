const mongooose = require("mongoose");

// User Schema
const userSchema = mongooose.Schema({
  profile:String,
  username: String,
  password: String,
  name: String,
  age: Number,
});

const userModel = mongooose.model("fullstack", userSchema, "fullstack");

module.exports = userModel;