const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

router.get('/', StudentController.getAll);

module.exports = router;