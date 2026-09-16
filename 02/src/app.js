const express = require("express");

const app = express();
app.use(express.json());

//  title , description
const notes = [];

// post routes sending info to server
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "note created successfully",
  });
});

// get routes geting info from server
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

//delete routes deleting the info from server eith index
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  notes.splice(index, 1);

  res.status(200).json({
    message: "note deleted successfully",
    notes: notes,
  });
});

//PATCH routes update already existing info from server
app.patch("/notes/:index", (req, res) => {
  if (notes[req.params.index]) {
    const index = req.params.index;
    const description = req.body.description;

    notes[index].description = description;

    res.status(200).json({
      message: "note updated successfully",
    });
  } else {
    res.status(404).json({
      message: "note index not found",
    });
  }
});

module.exports = app;
