const express = require('express');
const router = express.Router();
const cors = require('cors');
const Job = require('../models/jobschema');

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests

// Basic route to test connection
router.get('/', (req, res) => {
    res.send('Jobs route working');
});

// Route to add a new job
router.post('/addjob', async (req, res) => {
    try {
        const newJob = new Job({
            title: req.body.title,
            location: req.body.location,
            availability: req.body.availability,
            experience: req.body.experience,
            qualification: req.body.qualification,
            description: req.body.description
        });

        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch all job listings
router.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.setHeader('Content-Type', 'application/json'); // Explicitly set JSON response
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
