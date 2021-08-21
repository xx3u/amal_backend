const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/GroupController');
const auth = require('../middleware/passport');

router.get('/', auth, GroupController.getAll);
router.post('/', auth, GroupController.addNew);
router.get('/:id', auth, GroupController.getById);
router.get('/:id/lessons', auth, GroupController.getGroupsLessons);
router.put('/:id', auth, GroupController.updateOne);
router.delete('/:id', auth, GroupController.deleteById);
router.put('/:id/add-students', auth, GroupController.addStudents);
router.post('/:id/lessons/add', auth, GroupController.createGroupLessons);
router.put('/:id/lessons/edit', auth, GroupController.updateTeacherInLessons);
module.exports = router;
