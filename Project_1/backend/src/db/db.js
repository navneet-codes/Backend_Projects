const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MongoDB_URI);

  console.log("Connect to DB");
}

module.exports = connectDB;
