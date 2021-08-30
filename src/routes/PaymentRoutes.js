const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');
const accessByRole = require('../middleware/accessByRole');
const auth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { PaymentSchema } = require('../schemas/schemas');

router.get('/', auth, accessByRole('admin'), PaymentController.getByStudentId, PaymentController.getAll);
router.post('/', auth, accessByRole('admin'), validationMiddleware(PaymentSchema), PaymentController.addNew);
router.get('/:id', auth, accessByRole('admin'), PaymentController.getById);
router.put('/:id', auth, accessByRole('admin'), validationMiddleware(PaymentSchema), PaymentController.updateOne);
module.exports = router;
