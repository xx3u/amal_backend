const Subject = require('../models').Subject;

module.exports = {
  async getAll(req, res) {
    try {
      const subjects = await Subject.findAll();
      return res.status(200).send(subjects);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async addNew(req, res) {
    const newSubj = req.body;
    try {
      const createdSubj = await Subject.create(newSubj);
      return res.send(createdSubj);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getById(req, res) {
    try {
      const subject = await Subject.findByPk(req.params.id);
      if (subject) {
        return res.status(200).send(subject);
      } else {
        return res.status(404).send({ error: 'Subject with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateOne(req, res) {
    try {
      const subject = await Subject.findByPk(req.params.id);
      if (subject) {
        const updatedSubj = await subject.update({
          subjectName: req.body.subjectName || subject.subjectName,
        });
        return res.send(updatedSubj);
      } else {
        return res.status(404).send({ error: 'Subject with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async deleteById(req, res) {
    try {
      const subject = await Subject.findByPk(req.params.id);
      if (subject) {
        await subject.destroy();
        return res.send('the subject was deleted');
      } else {
        return res.status(404).send({ error: 'Subject with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
