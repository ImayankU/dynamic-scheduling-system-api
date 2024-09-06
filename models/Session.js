const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    user: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    attendees: [{ name: String, email: String }]
});

module.exports = mongoose.model('Session', SessionSchema);
