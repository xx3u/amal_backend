const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/LessonController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { LessonSchema } = require('../schemas/schemas');
const auth = require('../middleware/passport');

router.post('/', auth, validationMiddleware(LessonSchema), LessonController.addNew);
router.delete('/:id', auth, LessonController.deleteById);
router.post('/:id/add-student', LessonController.addAttendance);
router.delete('/:id/remove-student', LessonController.removeAttendance);

module.exports = router;
