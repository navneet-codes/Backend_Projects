const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
//middleware to handle cors
app.use(cors());

//middleware to read data in json format
app.use(express.json());

//middleware to read form-data so it can parse multipart/form-data
const upload = multer({ storage: multer.memoryStorage() });

//post routes to handle post request
app.post("/Create-post", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image is required" });
  }
  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    imageUrl: result.url,
    caption: req.body.caption,
  });

  res.status(200).json({
    message: "Post created successfully",
    fileName: req.body.caption,
  });
});

//get routes to handle get request
app.get("/Feed", async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json({
    message: "Feed fetched successfully",
    feed: posts,
  });
});

module.exports = app;
