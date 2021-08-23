const { Op } = require('sequelize');
const Attendance = require('../models').Attendance;
const Student = require('../models').Student;
const Lesson = require('../models').Lesson;

module.exports = {
  async addNew(req, res) {
    try {
      const { studentId, lessonId } = req.body;
      if (!studentId || !lessonId) return res.status(400).send({ error: 'Invalid request parameters' });
  
      const student = await Student.findByPk(studentId);
      if (!student) return res.status(404).send({ error: 'Student with this id was not found' });

      const lesson = await Lesson.findByPk(lessonId);
      if (!lesson) return res.status(404).send({ error: 'Lesson with this id was not found' });

      const existedAttendance = await Attendance.findOne({
        where: {
          [Op.and]: [
            { studentId },
            { lessonId },
          ],
        }
      });
      if (existedAttendance) return res.status(400).send({ error: 'Attendance already exists' });

      const createdAttendance = await Attendance.create({ studentId, lessonId });
      return res.send(createdAttendance);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async deleteById(req, res) {
    try {
      const attendance = await Attendance.findByPk(req.params.id);
      if (attendance) {
        await attendance.destroy();
        return res.send('Attendance record was deleted');
      } else {
        return res.status(404).send({ error: 'Attendance with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};