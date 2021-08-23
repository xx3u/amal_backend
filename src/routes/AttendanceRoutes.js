const express = require('express');
const router = express.Router();
const AttendanceController = require('../controllers/AttendanceController');

router.post('/', AttendanceController.addNew);

module.exports = router;
