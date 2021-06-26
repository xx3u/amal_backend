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

}