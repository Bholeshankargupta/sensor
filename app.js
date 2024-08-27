// app.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/sensorRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
