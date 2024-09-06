const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
    user: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    duration: { type: Number, required: true }
});

module.exports = mongoose.model('Availability', AvailabilitySchema);
