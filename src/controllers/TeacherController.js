const Teacher = require('../models').Teacher;
const Subject = require('../models').Subject;

module.exports = {
  async getAll(req, res) {
    try {
      const teachers = await Teacher.findAll({ include: { model: Subject, attributes: ['subjectName'] } });
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
  async getById(req, res) {
    try {
      const teacher = await Teacher.findByPk(req.params.id);
      if (teacher) {
        return res.send(teacher);
      } else {
        return res.status(404).send({ error: 'Teacher with this id was not found' });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async updateById(req, res) {
    try {
      const teacher = await Teacher.findByPk(req.params.id);
      if (teacher) {
        const updatedTeacher = await teacher.update(req.body);
        return res.send(updatedTeacher);
      } else {
        return res.status(404).send({ error: 'Teacher with this id was not found' });
      }
    } catch (error) {
      console.log('error: ', error);
      res.status(400).send(error);
    }
  },
  async deleteById(req, res) {
    try {
      const teacher = await Teacher.findByPk(req.params.id);
      if (teacher) {
        await teacher.destroy();
        return res.send('The teacher was deleted');
      } else {
        return res.status(404).send({ error: 'Teacher with this id was not found' });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async getBySubjectId(req, res) {
    const { subjectId } = req.query;
    if (subjectId) {
      try {
        const teachers = await Teacher.findAll({
          where: { subjectId },
        });
        return res.status(200).send(teachers);
      } catch (error) {
        return res.status(500).send(error);
      }
    }
  },
};
