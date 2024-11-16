const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    availability: { type: String, required: true },
    experience: { type: String, required: true },
    qualification: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
