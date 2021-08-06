const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { StudentSchema } = require('../schemas/schemas');
const passport = require('passport');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  StudentController.getByGroupId,
  StudentController.getAll
);
router.post('/', validationMiddleware(StudentSchema), StudentController.addNew);
router.get('/:id', StudentController.getById);
router.put('/:id', StudentController.updateOne);

module.exports = router;
