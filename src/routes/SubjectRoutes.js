const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/SubjectController');
const accessByRole = require('../middleware/accessByRole');
const auth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { SubjectSchema } = require('../schemas/schemas');

router.get('/', auth, SubjectController.getAll);
router.post('/', auth, accessByRole('admin'), validationMiddleware(SubjectSchema), SubjectController.addNew);
router.get('/:id', auth, SubjectController.getById);
router.put('/:id', auth, accessByRole('admin'), validationMiddleware(SubjectSchema), SubjectController.updateOne);
router.delete('/:id', auth, accessByRole('admin'), SubjectController.deleteById);
module.exports = router;
