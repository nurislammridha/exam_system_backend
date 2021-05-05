const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const examSchema = require("../schemas/ExamSchema");
const Registration = new mongoose.model("Registration", examSchema);

//post Registration
router.post("/", async (req, res) => {
  const newRegistration = new Registration(req.body);
  await newRegistration.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Registration was inserted successfully!",
      });
    }
  });
});

module.exports = router;
