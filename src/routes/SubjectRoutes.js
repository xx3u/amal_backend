const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/SubjectController');

router.get('/', SubjectController.getAll);
router.post('/', SubjectController.addNew);
router.get('/:id', SubjectController.getById);
router.put('/:id', SubjectController.updateOne);
router.delete('/:id', SubjectController.deleteById);
module.exports = router;
