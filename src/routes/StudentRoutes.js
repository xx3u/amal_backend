const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

router.get('/', StudentController.getAll);
router.post('/', StudentController.addNew);
router.get('/:id', StudentController.getById);
router.put('/:id', StudentController.updateOne);

module.exports = router;
