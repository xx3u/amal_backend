const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/GroupController');

router.get('/', GroupController.getAll);
router.post('/', GroupController.addNew);
router.get('/:id', GroupController.getById);
router.put('/:id', GroupController.updateOne);
router.delete('/:id', GroupController.deleteById);
router.put('/:id/add-students', GroupController.updateOne);
module.exports = router;
