const express = require('express');
const router = express.Router();
const Payment = require('../models').Payment;
const Student = require('../models').Student;

router.get('/', async (req, res) => {
  try {
    const payments = await Payment.findAll({
      include: {
        model: Student,
        attributes: ['id', 'firstName', 'lastName'],
      },
    });
    return res.status(200).send(payments);
  } catch (error) {
    console.log('oshybka', error)
    return res.status(500).send(error);
  }
});
module.exports = router;
