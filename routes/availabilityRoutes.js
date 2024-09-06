const express = require('express');
const { addAvailability } = require('../controllers/availabilityController');

const router = express.Router();

router.post('/', addAvailability);

// Add routes for update and delete

module.exports = router;
