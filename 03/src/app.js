const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json()); //middleware to get data in json format it is like parsing

/**
 * POST /notes => Create a note
 * GET /notes => Get all note
 * DELETE /notes => Delete a note
 * PATCH /notes => Update a note
 */

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "New Note Created Successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); //return [] always

  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      description: description,
    },
  );
  res.status(200).json({
    message: "note update successfully",
  });
});
module.exports = app;
