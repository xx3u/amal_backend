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
};
