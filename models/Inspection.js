const mongoose = require("mongoose");

const InspectionSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  checklist: { type: Array, required: true }, // ["Legs aligned", "No cracks", etc.]
  inspectedBy: { type: String, required: true },
  status: { type: String, enum: ["Pending", "Passed", "Failed"], default: "Pending" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Inspection", InspectionSchema);
