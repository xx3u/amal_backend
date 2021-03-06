const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/GroupController');
const accessByRole = require('../middleware/accessByRole');
const auth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { GroupSchema } = require('../schemas/schemas');

router.get('/', auth, GroupController.getAll);
router.post('/', auth, accessByRole('admin'), validationMiddleware(GroupSchema), GroupController.addNew);
router.get('/:id', auth, GroupController.getById);
router.get('/:id/lessons', auth, GroupController.getGroupsLessons);
router.put('/:id', auth, accessByRole('admin'), validationMiddleware(GroupSchema), GroupController.updateOne);
router.delete('/:id', auth, accessByRole('admin'), GroupController.deleteById);
router.put('/:id/add-students', auth, accessByRole('admin'), GroupController.addStudents);
router.post('/:id/lessons/add', auth, accessByRole('admin'), GroupController.createGroupLessons);
router.put('/:id/lessons/edit', auth, accessByRole('admin'), GroupController.updateTeacherInLessons);
module.exports = router;
