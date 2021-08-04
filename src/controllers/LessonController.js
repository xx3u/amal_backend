const Lesson = require('../models').Lesson;

module.exports = {
  async addNew(req, res) {
    const newLesson = req.body;

    try {
      const createdLesson = await Lesson.create(newLesson);
      return res.send(createdLesson);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async deleteById(req, res) {
    try {
      const lesson = await Lesson.findByPk(req.params.id);
      if (lesson) {
        await lesson.destroy();
        return res.send('the lesson was deleted');
      } else {
        return res.status(404).send({ error: 'Lesson with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
