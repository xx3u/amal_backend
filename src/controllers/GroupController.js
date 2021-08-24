const { Op } = require('sequelize');
const Group = require('../models').Group;
const Student = require('../models').Student;
const Subject = require('../models').Subject;
const Teacher = require('../models').Teacher;
const Lesson = require('../models').Lesson;
const { getDatePeriod } = require('../helpers');

module.exports = {
  async getAll(req, res) {
    try {
      const groups = await Group.findAll({
        include: {
          model: Student,
          attributes: ['id', 'firstName', 'lastName', 'grade'],
        },
      });
      return res.status(200).send(groups);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async addNew(req, res) {
    const newGroup = req.body;
    try {
      const createdGroup = await Group.create(newGroup);
      return res.send(createdGroup);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getById(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (group) {
        return res.status(200).send(group);
      } else {
        return res.status(404).send({ error: 'Group with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateOne(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (group) {
        const updatedGroup = await group.update({
          groupName: req.body.groupName || group.groupName,
        });
        return res.send(updatedGroup);
      } else {
        return res.status(404).send({ error: 'Group with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async deleteById(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (group) {
        await group.destroy({
          groupName: req.body.groupName || group.groupName,
        });
        return res.send('the group was deleted');
      } else {
        return res.status(404).send({ error: 'Group with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async addStudents(req, res) {
    try {
      const { studentIds } = req.body;
      const group = await Group.findByPk(req.params.id);
      if (group) {
        await Student.update({ groupId: group.id, status: 'Активный' }, { where: { id: studentIds } });
        return res.sendStatus(204);
      } else {
        return res.status(404).send({ error: 'Group with this id was not found' });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
  async getGroupsLessons(req, res) {
    const groupId = req.params.id;
    try {
      const group = await Group.findByPk(groupId);
      if (!group) return res.status(404).send({ error: 'Group with this id was not found' });

      const { startTime, endTime } = req.query;
      if (!startTime || !endTime) return res.status(400).send({ error: 'Invalid request parameters' });

      const lessons = await group.getLessons({
        where: {
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

        include: [
          { model: Subject, attributes: ['subjectName'] },
          { model: Teacher, attributes: ['firstName', 'lastName'] },
          { model: Student, attributes: [ 'id', 'firstName', 'lastName' ], through: { attributes: [] } },
        ],
      });
      return res.send(lessons);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  async createGroupLessons(req, res) {
    const groupId = req.params.id;
    try {
      const group = await Group.findByPk(groupId);
      if (!group) return res.status(404).send({ error: 'Group with this id was not found' });

      let { startTime, endTime, createStartTime, createEndTime } = req.body;
      if (!startTime || !endTime || !createStartTime || !createEndTime)
        return res.status(400).send({ error: 'Invalid request parameters' });

      endTime = new Date(new Date(endTime).setHours(23));

      const lessons = await group.getLessons({
        where: {
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
      });

      const range = getDatePeriod(createStartTime, createEndTime);

      const existedLesson = await Lesson.findOne({
        where: {
          [Op.and]: [
            {
              groupId,
            },
            {
              [Op.and]: [
                {
                  startTime: {
                    [Op.lt]: createEndTime,
                  },
                },
                {
                  endTime: {
                    [Op.gt]: createStartTime,
                  },
                },
              ],
            },
          ],
        },
      });

      if (existedLesson) return res.status(400).send({ error: 'Lessons already exist for this period' });

      const insertBulk = () => {
        let newLessons = [];
        range.forEach((dd) => {
          lessons.forEach((lesson) => {
            if (dd.getDay() === lesson.startTime.getDay()) {
              const newStartTime = new Date(dd.setHours(lesson.startTime.getHours(), lesson.startTime.getMinutes()));
              const newEndTime = new Date(dd.setHours(lesson.endTime.getHours(), lesson.endTime.getMinutes()));
              const newLesson = {
                startTime: newStartTime,
                endTime: newEndTime,
                groupId: lesson.groupId,
                subjectId: lesson.subjectId,
                teacherId: lesson.teacherId,
              };
              newLessons.push(newLesson);
            }
          });
        });
        return newLessons;
      };

      await Lesson.bulkCreate(insertBulk());
      return res.send({ message: ' Lessons created successfully' });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  async updateTeacherInLessons(req, res) {
    const groupId = req.params.id;
    try {
      const group = await Group.findByPk(groupId);
      if (!group) return res.status(404).send({ error: 'Group with this id was not found' });

      const { startTime, oldTeacherId, newTeacherId } = req.body;
      if (!startTime || !oldTeacherId || !newTeacherId)
        return res.status(400).send({ error: 'Invalid request parameters' });

      const oldTeachersLessons = await group.getLessons({
        where: {
          [Op.and]: [{ startTime: { [Op.gte]: startTime } }, { teacherId: oldTeacherId }],
        },
      });

      const newTeachersLessons = await Lesson.findAll({
        where: {
          [Op.and]: [{ startTime: { [Op.gte]: startTime } }, { teacherId: newTeacherId }],
        },
      });
      const slotsOfNewTeachersLessons = newTeachersLessons.map((lesson) => {
        return lesson.startTime.toISOString();
      });

      const teacherIsBusy = oldTeachersLessons.some((oldLesson) => {
        return slotsOfNewTeachersLessons.includes(oldLesson.startTime.toISOString());
      });

      if (teacherIsBusy) return res.status(400).send({ error: 'Selected teacher is busy in selected range date' });

      await Lesson.update(
        { teacherId: newTeacherId },
        {
          where: {
            [Op.and]: [{ groupId: groupId }, { teacherId: oldTeacherId }, { startTime: { [Op.gte]: startTime } }],
          },
        }
      );
      return res.sendStatus(200);
    } catch (e) {
      return res.status(500).send(error);
    }
  },
};
