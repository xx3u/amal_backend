const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');
const passAuth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { StudentSchema } = require('../schemas/schemas');

router.get('/', passAuth, StudentController.getByGroupId, StudentController.getAll);
router.post('/', passAuth, validationMiddleware(StudentSchema), StudentController.addNew);
router.get('/:id', passAuth, StudentController.getById);
router.put('/:id', passAuth, StudentController.updateOne);

module.exports = router;
