const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');
const accessByRole = require('../middleware/accessByRole');
const auth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { StudentSchema } = require('../schemas/schemas');
const joiOptions = { allowUnknown: true };
router.get('/', auth, accessByRole('admin'), StudentController.getByGroupId, StudentController.getAll);
router.post('/', auth, accessByRole('admin'), validationMiddleware(StudentSchema), StudentController.addNew);
router.get('/:id', auth, accessByRole('admin'), StudentController.getById);
router.put(
  '/:id',
  auth,
  accessByRole('admin'),
  validationMiddleware(StudentSchema, joiOptions),
  StudentController.updateOne
);

module.exports = router;
