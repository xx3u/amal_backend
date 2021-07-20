const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

router.get('/', PaymentController.getAll);
router.post('/', PaymentController.addNew);
router.get('/:id', PaymentController.getById);
router.put('/:id', PaymentController.updateOne);
router.delete('/:id', PaymentController.deleteById);
module.exports = router;
