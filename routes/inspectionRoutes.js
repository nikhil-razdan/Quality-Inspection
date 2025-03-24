const express = require("express");
const Inspection = require("../models/Inspection");

const router = express.Router();

// Create an Inspection Record
router.post("/add", async (req, res) => {
  try {
    const newInspection = new Inspection(req.body);
    await newInspection.save();
    res.status(201).json(newInspection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Inspections
router.get("/", async (req, res) => {
  try {
    const inspections = await Inspection.find();
    res.status(200).json(inspections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedInspection = await Inspection.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedInspection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Inspection.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Inspection deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
