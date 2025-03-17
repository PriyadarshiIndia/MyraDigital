const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http"); // For serverless compatibility
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Enquiry Schema
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  product_title: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// API Route to Handle Enquiry Submission
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, email, phone, product_title, message } = req.body;
    const newEnquiry = new Enquiry({ name, email, phone, product_title, message });
    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit enquiry" });
  }
});

// API Route to Fetch All Enquiries
app.get("/api/enquiries", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }); // Get all enquiries, sorted by date
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
});

// Export the app for Vercel
module.exports.handler = serverless(app);