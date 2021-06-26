const Student = require('../models').Student;

module.exports = {
  async getAll(req, res) {
    try {
      const students = await Student.findAll();
      return res.status(200).send(students);
    } catch (error) {
      console.log(error);
    }
  },
  async addNew(req, res) {
    const newStudent = req.body;
    try {
      const createdStudent = await Student.create(newStudent);
      res.send(createdStudent);
    } catch (error) {
      console.log(error);
    }
  },
  async getById(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);
      res.send(student);
    } catch (error) {
      console.log(error);
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
          updatedAt: req.body.updatedAt
        });
        res.send(updatedStudent);
      } else {
        res.send('Student was not found');
      }
    } catch (error) {
      console.log(error);
    }
  }
}