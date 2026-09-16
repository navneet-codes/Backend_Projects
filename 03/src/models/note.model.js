const mongoose = require("mongoose");

//to define the structure of dB like what kind of data like in what format we are going to store in DB we require Schema
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

//to perform CRUD operations we use model or basically used to perform operations on mongoDb
const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
