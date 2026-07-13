const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello Backend AI Internship!",
  });
});

app.get("/status", (req, res) => {
  res.json({
    status: "OK",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
