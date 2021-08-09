const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/GroupController');

router.get('/', GroupController.getAll);
router.post('/', GroupController.addNew);
router.get('/:id', GroupController.getById);
router.get('/:id/lessons', GroupController.getGroupsLessons);
router.put('/:id', GroupController.updateOne);
router.delete('/:id', GroupController.deleteById);
router.put('/:id/add-students', GroupController.addStudents);
router.post('/:id/lessons/add', GroupController.createGroupLessons);
module.exports = router;
