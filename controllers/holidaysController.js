const express = require("express");
const Holiday = require("../models/model_holidays");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

router.get("/seed", async (req, res) => {
  await Holiday.deleteMany({});
  await Holiday.insertMany([
    {
      name: "New Year's Day",
    },
    {
      name: "Good Friday",
    },
  ]);
  res.send("holidays seeded");
});

module.exports = router;
