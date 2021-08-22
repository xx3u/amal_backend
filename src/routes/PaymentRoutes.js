const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');
const auth = require('../middleware/passport');

router.get('/', auth, PaymentController.getByStudentId, PaymentController.getAll);
router.post('/', auth, PaymentController.addNew);
router.get('/:id', auth, PaymentController.getById);
router.put('/:id', auth, PaymentController.updateOne);
module.exports = router;
