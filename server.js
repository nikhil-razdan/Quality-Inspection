require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Parse JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Base route
app.get("/", (req, res) => {
  res.send("Quality Inspection API is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const inspectionRoutes = require("./routes/inspectionRoutes");
app.use("/api/inspections", inspectionRoutes);