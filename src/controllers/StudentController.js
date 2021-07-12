const Student = require('../models').Student;

module.exports = {
  async getAll(req, res) {
    try {
      const students = await Student.findAll({ attributes: ['id', 'firstName', 'lastName', 'grade'] });
      return res.status(200).send(students);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async addNew(req, res) {
    const newStudent = req.body;
    try {
      const createdStudent = await Student.create(newStudent);
      return res.send(createdStudent);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getById(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);
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
        const updatedStudent = await student.update(req.body);
        return res.send(updatedStudent);
      } else {
        return res.status(404).send({ error: 'Student with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
