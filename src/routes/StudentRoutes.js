const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { StudentSchema } = require('../schemas/schemas');

router.get('/', StudentController.getByGroupId, StudentController.getAll);
router.post('/', validationMiddleware(StudentSchema), StudentController.addNew);
router.get('/:id', StudentController.getById);
router.put('/:id', StudentController.updateOne);

module.exports = router;
