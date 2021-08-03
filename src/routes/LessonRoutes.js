const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/LessonController');
const { checkLessonsTime } = require('../middleware/lessonsMiddleware');
const validationMiddleware = require('../middleware/validationMiddleware');
const { LessonSchema } = require('../schemas/schemas');

router.post('/', validationMiddleware(LessonSchema), checkLessonsTime, LessonController.addNew);
router.delete('/:id', LessonController.deleteById);

module.exports = router;
