const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/LessonController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { LessonSchema } = require('../schemas/schemas');
const auth = require('../middleware/passport');
const accessByRole = require('../middleware/accessByRole');

router.post('/', auth, accessByRole('admin'), validationMiddleware(LessonSchema), LessonController.addNew);
router.delete('/:id', auth, accessByRole('admin'), LessonController.deleteById);
router.post('/:id/add-student', auth, accessByRole('teacher', 'admin'), LessonController.addAttendance);
router.delete('/:id/remove-student', auth, accessByRole('teacher', 'admin'), LessonController.removeAttendance);

module.exports = router;
