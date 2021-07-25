const Teacher = require('../models').Teacher;
const { addNew } = require('./PaymentController');
const { deleteById } = require('./StreamController');

module.exports = {
  async getAll(req, res) {
    try {
      const teachers = await Teacher.findAll();
      return res.status(200).send(teachers);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async addNew(req, res) {
    try {
      const newTeacher = await Teacher.create(req.body);
      return res.status(200).send(newTeacher);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async updateById(req, res) {
    try {
      const updatedTeacher = await Teacher.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).send('Updated successfully!');
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async deleteById(req, res) {
    try {
      await Teacher.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).send('The teacher was deleted!');
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
