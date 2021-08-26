const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/TeacherController');
const auth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { TeacherSchema } = require('../schemas/schemas');

router.get('/', auth, TeacherController.getBySubjectId, TeacherController.getAll);
router.get('/:id', auth, TeacherController.getById);
router.get('/:id/lessons', auth, TeacherController.getTeachersLessons);
router.post('/', auth, validationMiddleware(TeacherSchema), TeacherController.addNew);
router.put('/:id', auth, validationMiddleware(TeacherSchema), TeacherController.updateById);
router.delete('/:id', auth, TeacherController.deleteById);

module.exports = router;
