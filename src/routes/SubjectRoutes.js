const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/SubjectController');
const accessByRole = require('../middleware/accessByRole');
const auth = require('../middleware/passport');

router.get('/', auth, SubjectController.getAll);
router.post('/', auth, accessByRole('role'), SubjectController.addNew);
router.get('/:id', auth, SubjectController.getById);
router.put('/:id', auth, accessByRole('role'), SubjectController.updateOne);
router.delete('/:id', auth, accessByRole('role'), SubjectController.deleteById);
module.exports = router;
