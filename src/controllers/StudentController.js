const Student = require('../models').Student;
const Stream = require('../models').Stream;
const Group = require('../models').Group;
const Payment = require('../models').Payment;
const { Op } = require('sequelize');

module.exports = {
  async getAll(req, res) {
    try {
      const reqQuery = req.query;

   const searchConditions = Object.entries(req.query)
        .filter(([key, value]) => value)
        .map(([key, value]) => {
          return { [key]: { [Op.iLike]: `%${value}%` } };
        });

      const students = await Student.findAll({
        where: { [Op.and]: searchConditions },
        include: [
          { model: Stream, attributes: ['name'] },
          { model: Group, attributes: ['groupName'] },
          {
            model: Payment,
            as: 'LastPayment',
            attributes: ['id', 'date', 'amount', 'status'],
            order: [['date', 'DESC']],
            limit: 1,
          },
        ],
      });

      return res.status(200).send(students);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getByGroupId(req, res, next) {
    const { groupId } = req.query;
    if (groupId) {
      try {
        const students = await Student.findAll({ where: { groupId } });
        return res.status(200).send(students);
      } catch (error) {
        return res.status(500).send(error);
      }
    } else if (groupId === '') {
      const studentWoGroup = await Student.findAll({ where: { groupId: null } });
      return res.status(200).send(studentWoGroup);
    }
    next();
  },
  async addNew(req, res) {
    const newStudent = req.body;
    try {
      const createdStudent = await Student.create(newStudent);
      const postedStudent = await Student.findOne({
        where: { id: createdStudent.id },
        include: [
          { model: Stream, attributes: ['name'] },
          { model: Group, attributes: ['groupName'] },
        ],
      });
      return res.send(postedStudent);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getById(req, res) {
    try {
      const student = await Student.findOne({
        where: { id: req.params.id },
        include: [
          { model: Stream, attributes: ['name'] },
          { model: Group, attributes: ['groupName'] },
        ],
      });
      if (student) {
        return res.status(200).send(student);
      } else {
        return res.status(404).send({ error: 'Student with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateOne(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);
      if (student) {
        let changedStudent = req.body;
        if (changedStudent.status === 'Отчисленный') {
          changedStudent = { ...req.body, groupId: null };
        }
        const updatedStudent = await student.update(changedStudent);
        const postedStudent = await Student.findOne({
          where: { id: updatedStudent.id },
          include: [
            { model: Stream, attributes: ['name'] },
            { model: Group, attributes: ['groupName'] },
          ],
        });
        return res.send(postedStudent);
      } else {
        return res.status(404).send({ error: 'Student with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
