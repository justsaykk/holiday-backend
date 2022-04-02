//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const Holiday = require("./models/model_holidays");
const HolidayController = require("./controllers/holidaysController");

//Middlewares
app.use("/api/holidays", HolidayController);
app.use(cors());
app.use(express.json());

//Error / Disconnection
mongoose.connection.on("error", (err) => {
  console.log(err.message + " is Mongod not running?");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongo disconnected");
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

app.get("/", (req, res) => {
  res.send("Hello World 3");
});

//LISTEN
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
