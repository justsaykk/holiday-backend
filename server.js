//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

//Middlewares
app.use(express.json());

//Error / Disconnection
mongoose.connection.on("error", (err) => {
  console.log(err.message + " is Mongod not running?");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongo disconnected");
});

mongoose.connect("mongodb://localhost:27017/holidays", {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

//LISTEN
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
