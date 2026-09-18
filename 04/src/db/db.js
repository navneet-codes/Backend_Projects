const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("database connected successfully");
  } catch (error) {
    console.log(`error : ${error}`);
  }
}

module.exports = connectDB;
