const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/GroupController');
const passAuth = require('../middleware/passport');

router.get('/', passAuth, GroupController.getAll);
router.post('/', passAuth, GroupController.addNew);
router.get('/:id', passAuth, GroupController.getById);
router.get('/:id/lessons', passAuth, GroupController.getGroupsLessons);
router.put('/:id', passAuth, GroupController.updateOne);
router.delete('/:id', passAuth, GroupController.deleteById);
router.put('/:id/add-students', passAuth, GroupController.addStudents);
module.exports = router;
