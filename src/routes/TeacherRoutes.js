const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/TeacherController');

router.get('/', TeacherController.getAll);
router.post('/', TeacherController.addNew);
router.put('/:id', TeacherController.updateById);
router.delete('/:id', TeacherController.deleteById);

module.exports = router;
