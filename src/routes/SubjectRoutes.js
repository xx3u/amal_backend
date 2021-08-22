const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/SubjectController');
const auth = require('../middleware/passport');

router.get('/', auth, SubjectController.getAll);
router.post('/', auth, SubjectController.addNew);
router.get('/:id', auth, SubjectController.getById);
router.put('/:id', auth, SubjectController.updateOne);
router.delete('/:id', auth, SubjectController.deleteById);
module.exports = router;
