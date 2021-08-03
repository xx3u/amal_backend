const Lesson = require('../models').Lesson;
const { Op } = require('sequelize');
module.exports = {
  async checkLessonsTime(req, res, next) {
    const { teacherId, groupId, endTime, startTime } = req.body;

    const lessons = await Lesson.findAll({
      where: {
        [Op.and]: [
          {
            [Op.or]: [{ teacherId }, { groupId }],
          },
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
    if (lessons.length) return res.status(400).send({ error: 'Selected time is not available' });
    next();
  },
};
