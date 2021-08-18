const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/GroupController');
const accessByRole = require('../middleware/accessByRole');
const auth = require('../middleware/passport');

router.get('/', auth, GroupController.getAll);
router.post('/', auth, accessByRole('admin'), GroupController.addNew);
router.get('/:id', auth, GroupController.getById);
router.get('/:id/lessons', auth, GroupController.getGroupsLessons);
router.put('/:id', auth, accessByRole('admin'), GroupController.updateOne);
router.delete('/:id', auth, accessByRole('admin'), GroupController.deleteById);
router.put('/:id/add-students', auth, accessByRole('admin'), GroupController.addStudents);
router.post('/:id/lessons/add', auth, accessByRole('admin'), GroupController.createGroupLessons);
module.exports = router;
