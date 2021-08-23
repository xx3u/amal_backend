const Lesson = require('../models').Lesson;
const Student = require('../models').Student;
const { checkLessonsTime } = require('../helpers');
module.exports = {
  async addNew(req, res) {
    const newLesson = req.body;
    try {
      const isTimeBusy = await checkLessonsTime(Lesson, newLesson);
      if (isTimeBusy) return res.status(400).send({ message: 'Selected time is busy' });

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

  async addAttendance(req, res) {
    const lessonId = req.params.id;
    try {
      const lesson = await Lesson.findByPk(lessonId);
      if (!lesson) return res.status(404).send({ error: 'Lesson with this id was not found' });

      const { studentId } = req.body;
      const student = await Student.findByPk(studentId);
      if (!student) return res.status(404).send({ error: 'Student with this id was not found' });

      const alreadyAddedStudent = await lesson.hasStudent(student);
      if (alreadyAddedStudent) return res.status(404).send({ error: 'This student was already added to this lesson' });

      await lesson.addStudent(student);
      return res.status(200).send('Student successfully added to lesson');
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
