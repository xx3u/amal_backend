const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/TeacherController');
const auth = require('../middleware/passport');

router.get('/', auth, TeacherController.getBySubjectId, TeacherController.getAll);
router.get('/:id', auth, TeacherController.getById);
router.get('/:id/lessons', auth, TeacherController.getTeachersLessons);
router.post('/', auth, TeacherController.addNew);
router.put('/:id', auth, TeacherController.updateById);
router.delete('/:id', auth, TeacherController.deleteById);

module.exports = router;
