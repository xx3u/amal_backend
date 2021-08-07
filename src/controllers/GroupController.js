const { Op } = require('sequelize');
const Group = require('../models').Group;
const Student = require('../models').Student;
const Subject = require('../models').Subject;
const Teacher = require('../models').Teacher;

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
        ],
      });
      return res.send(lessons);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};
