const express = require('express');
const StreamController = require('../controllers/StreamController');
const accessByRole = require('../middleware/accessByRole');
const router = express.Router();
const auth = require('../middleware/passport');

router.get('/', auth, StreamController.getAll);
router.post('/', auth, accessByRole('admin'), StreamController.addNew);
router.get('/:id', auth, StreamController.getById);
router.put('/:id', auth, accessByRole('admin'), StreamController.updateOne);
router.delete('/:id', auth, accessByRole('admin'), StreamController.deleteById);

module.exports = router;
