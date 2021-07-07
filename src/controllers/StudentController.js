const Student = require('../models').Student;

module.exports = {
  async getAll(req, res) {
    try {
      const students = await Student.findAll();
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
        return res.status(400).send({ error: 'Student with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateOne(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);
      if (student) {
        const updatedStudent = await student.update({
          firstName: req.body.firstName || student.firstName,
          lastName: req.body.lastName || student.lastName,
          middleName: req.body.middleName || student.middleName,
          grade: req.body.grade || student.grade,
          language: req.body.language || student.language,
          school: req.body.school || student.school,
          parentsContacts: req.body.parentsContacts || student.parentsContacts,
          stream: req.body.stream || student.stream,
          address: req.body.address || student.address,
          telephone: req.body.telephone || student.telephone,
          email: req.body.email || student.email,
          createdAt: req.body.createdAt,
          updatedAt: req.body.updatedAt,
        });
        return res.send(updatedStudent);
      } else {
        return res.status(400).send({ error: 'Student with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
