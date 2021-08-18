const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');
const accessByRole = require('../middleware/accessByRole');
const auth = require('../middleware/passport');

router.get('/', auth, accessByRole('admin'), PaymentController.getByStudentId, PaymentController.getAll);
router.post('/', auth, accessByRole('admin'), PaymentController.addNew);
router.get('/:id', auth, accessByRole('admin'), PaymentController.getById);
router.put('/:id', auth, accessByRole('admin'), PaymentController.updateOne);
module.exports = router;
