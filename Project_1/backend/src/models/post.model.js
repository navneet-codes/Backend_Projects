const mongoose = require("mongoose");

//creating post schema
const postSchema = new mongoose.Schema({
  imageUrl: String,
  caption: String,
});

//creating post model to perform CRUD operation
const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
