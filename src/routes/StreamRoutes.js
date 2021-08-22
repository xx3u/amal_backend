const express = require('express');
const StreamController = require('../controllers/StreamController');
const router = express.Router();
const auth = require('../middleware/passport');

router.get('/', auth, StreamController.getAll);
router.post('/', auth, StreamController.addNew);
router.get('/:id', auth, StreamController.getById);
router.put('/:id', auth, StreamController.updateOne);
router.delete('/:id', auth, StreamController.deleteById);

module.exports = router;
