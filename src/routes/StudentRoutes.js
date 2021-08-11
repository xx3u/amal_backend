const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');
const auth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { StudentSchema } = require('../schemas/schemas');

router.get('/', auth, StudentController.getByGroupId, StudentController.getAll);
router.post('/', auth, validationMiddleware(StudentSchema), StudentController.addNew);
router.get('/:id', auth, StudentController.getById);
router.put('/:id', auth, StudentController.updateOne);

module.exports = router;
