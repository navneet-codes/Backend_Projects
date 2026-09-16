const express = require("express");

const app = express(); //  creating server instance

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server is running on port number 3000");
}); // starting the server on port number 3000  which should be  free
