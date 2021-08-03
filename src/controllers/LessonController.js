const Lesson = require('../models').Lesson;
const { Op } = require('sequelize');
module.exports = {
  async getLessonsByGroup(req, res) {
    const { groupId, startTime, endTime } = req.query;
    if (!groupId || !startTime || !endTime) {
      return res.status(400).send({ message: 'Invalid request parameters' });
    }
    try {
      const lessons = await Lesson.findAll({
        where: {
          [Op.and]: [
            { groupId },
            ,
            {
              [Op.and]: [
                {
                  startTime: {
                    [Op.lt]: endTime,
                  },
                },
                {
                  endTime: {
                    [Op.gt]: startTime,
                  },
                },
              ],
            },
          ],
        },
      });
      return res.send(lessons);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },

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
