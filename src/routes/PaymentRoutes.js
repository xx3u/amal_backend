const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');
const auth = require('../middleware/passport');
const validationMiddleware = require('../middleware/validationMiddleware');
const { PaymentSchema } = require('../schemas/schemas');

router.get('/', auth, PaymentController.getByStudentId, PaymentController.getAll);
router.post('/', auth, validationMiddleware(PaymentSchema), PaymentController.addNew);
router.get('/:id', auth, PaymentController.getById);
router.put('/:id', auth, validationMiddleware(PaymentSchema), PaymentController.updateOne);
module.exports = router;
