const express = require('express');
const { scheduleSession } = require('../controllers/sessionController');

const router = express.Router();

router.post('/', scheduleSession);

module.exports = router;
