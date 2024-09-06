const Session = require('../models/Session');
const Availability = require('../models/Availability');

exports.scheduleSession = async (req, res) => {
    try {
        const { user, start, end, attendees } = req.body;

        // Check for availability
        const availability = await Availability.findOne({ user, start: { $lte: end }, end: { $gte: start } });
        if (!availability) return res.status(400).json({ msg: 'No availability found' });

        const session = new Session({ user, start, end, attendees });
        await session.save();
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
