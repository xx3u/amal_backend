const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

router.get('/', PaymentController.getbyStudentId, PaymentController.getAll);
router.post('/', PaymentController.addNew);
router.get('/:id', PaymentController.getById);
router.put('/:id', PaymentController.updateOne);
module.exports = router;
