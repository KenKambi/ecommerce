const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API");
});

app.listen(5000, () => console.log("Server running on port 5000"));