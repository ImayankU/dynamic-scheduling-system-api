const Availability = require('../models/Availability');

exports.addAvailability = async (req, res) => {
    try {
        const { user, start, end, duration } = req.body;
        const availability = new Availability({ user, start, end, duration });
        await availability.save();
        res.status(201).json(availability);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Implement update and delete similarly
