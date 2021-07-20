const Payment = require('../models').Payment;

module.exports = {
  async getAll(req, res) {
    try {
      const payments = await Payment.findAll({
        include: {
          model: Student,
          attributes: ['id', 'firstName', 'lastName'],
        },
      });
      return res.status(200).send(payments);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async addNew(req, res) {
    const newPayment = req.body;
    try {
      const createdPayment = await Payment.create(newPayment);
      return res.send(createdPayment);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getById(res, req) {
    try {
      const payment = await Payment.findByPK(req.params.id);
      if (payment) {
        return res.status(200).send(payment);
      } else {
        return res.status(404).send({ error: 'Payment with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
