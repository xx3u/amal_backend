const Payment = require('../models').Payment;
const Student = require('../models').Student;

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
  async getById(req, res) {
    try {
      const payment = await Payment.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: Student,
            attributes: ['id', 'firstName', 'lastName'],
          },
        ],
      });
      if (payment) {
        return res.status(200).send(payment);
      } else {
        return res.status(404).send({ error: 'Неверный id платежа' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateOne(req, res) {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (payment) {
        const updatedPayment = await payment.update(req.body);
        return res.send(updatedPayment);
      } else {
        return res.status(404).send({ error: 'Неверный id платежа' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getByStudentId(req, res, next) {
    const { studentId } = req.query;
    if (studentId) {
      try {
        const payments = await Payment.findAll({
          where: { studentId },
          order: [['date', 'DESC']],
        });
        return res.status(200).send(payments);
      } catch (error) {
        return res.status(500).send(error);
      }
    }
    next();
  },
};
