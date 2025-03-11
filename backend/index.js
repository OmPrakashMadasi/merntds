const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/Contact'); // Ensure lowercase 'routes'
const addJobRoute = require('./routes/addjob');    // Ensure lowercase 'routes'
const app = express();

// CORS configuration to allow both www and non-www versions
const corsOptions = {
  origin: [
    'https://www.trishoka.com',  // With www
    'https://trishoka.com',      // Without www
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Customize methods as needed
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'], // Customize headers as needed
};

app.use(cors(corsOptions));

app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'your_mongo_uri_here';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Routes
app.use('/api', contactRoutes);
app.use('/api', addJobRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
