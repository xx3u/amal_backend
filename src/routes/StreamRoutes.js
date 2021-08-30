const express = require('express');
const StreamController = require('../controllers/StreamController');
const accessByRole = require('../middleware/accessByRole');
const router = express.Router();
const auth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { StreamSchema } = require('../schemas/schemas');

router.get('/', auth, StreamController.getAll);
router.post('/', auth, accessByRole('admin'), validationMiddleware(StreamSchema), StreamController.addNew);
router.get('/:id', auth, StreamController.getById);
router.put('/:id', auth, accessByRole('admin'), validationMiddleware(StreamSchema), StreamController.updateOne);
router.delete('/:id', auth, accessByRole('admin'), StreamController.deleteById);

module.exports = router;
