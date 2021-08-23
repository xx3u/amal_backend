const express = require('express');
const router = express.Router();
const AttendanceController = require('../controllers/AttendanceController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { AttendanceSchema } = require('../schemas/schemas');
const auth = require('../middleware/passport');

router.post('/', auth, validationMiddleware(AttendanceSchema) ,AttendanceController.addNew);
router.delete('/:id', auth, AttendanceController.deleteById);

module.exports = router;
