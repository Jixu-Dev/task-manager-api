require("dotenv").config();
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (e) {}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasks");

const app = express();

// Middleware
app.use(cors()); // allow requests from the React frontend
app.use(express.json()); // parse incoming JSON request bodies

// Routes
app.get("/", (req, res) => {
  res.send("Task Manager API is running.");
});
app.use("/api/tasks", taskRoutes);

// Connect to MongoDB, then start the server only once the connection succeeds
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
