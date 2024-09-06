const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        user = new User({ email });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
