const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/LessonController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { LessonSchema } = require('../schemas/schemas');

router.post('/', validationMiddleware(LessonSchema), LessonController.addNew);
router.delete('/:id', LessonController.deleteById);

module.exports = router;
