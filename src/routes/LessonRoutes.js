const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/LessonController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { LessonSchema } = require('../schemas/schemas');
const passAuth = require('../middleware/passport');

router.post('/', passAuth, validationMiddleware(LessonSchema), LessonController.addNew);
router.delete('/:id', passAuth, LessonController.deleteById);

module.exports = router;
