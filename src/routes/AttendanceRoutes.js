const express = require('express');
const router = express.Router();
const AttendanceController = require('../controllers/AttendanceController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { AttendanceSchema } = require('../schemas/schemas');

router.post('/', validationMiddleware(AttendanceSchema) ,AttendanceController.addNew);

module.exports = router;
