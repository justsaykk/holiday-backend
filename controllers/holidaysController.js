const express = require("express");
const Holiday = require("../models/model_holidays");
const router = express.Router();

// Index route.
router.get("/", function (req, res) {
  Holiday.find()
    .then((holidays) => {
      res.json(holidays);
    })
    .catch((error) => res.json(error));
});

// router.get("/seed", async (req, res) => {
//   const Holidays = [
//     {
//       name: "New Year's Day",
//     },
//     {
//       name: "Good Friday",
//     },
//   ];

//   await Holiday.deleteMany({});
//   await Holiday.insertMany(Holidays);
//   res.send(Holidays);
// });

// Create Route
router.post("/", async (req, res) => {
  try {
    const createdHoliday = await Holiday.create(req.body);
    res.status(200).send(createdHoliday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
