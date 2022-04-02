const express = require("express");
const Holiday = require("../models/model_holidays");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

router.get("/seed", async (req, res) => {
  const Holidays = [
    {
      name: "New Year's Day",
    },
    {
      name: "Good Friday",
    },
  ];

  await Holiday.deleteMany({});
  await Holiday.insertMany(Holidays);
  res.send(Holidays);
});

module.exports = router;
