const express = require('express');
const StreamController = require('../controllers/StreamController');

const router = express.Router();

router.get('/', StreamController.getAll);
router.post('/', StreamController.addNew);
router.get('/:id', StreamController.getById);
router.put('/:id', StreamController.updateOne);
router.delete('/:id', StreamController.deleteById);

module.exports = router;
