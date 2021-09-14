const Lesson = require('../models').Lesson;
const Student = require('../models').Student;
const { checkLessonsTime } = require('../helpers');
module.exports = {
  async addNew(req, res) {
    const newLesson = req.body;
    try {
      const isTimeBusy = await checkLessonsTime(Lesson, newLesson);
      if (isTimeBusy) return res.status(400).send({ message: 'Выбранное время занято' });

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
        return res.send('Урок удален');
      } else {
        return res.status(404).send({ error: 'Неверный id урока' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async addAttendance(req, res) {
    const lessonId = req.params.id;
    try {
      const lesson = await Lesson.findByPk(lessonId);
      if (!lesson) return res.status(404).send({ error: 'Неверный id урока' });

      const { studentId } = req.body;
      const student = await Student.findByPk(studentId);
      if (!student) return res.status(404).send({ error: 'Неверный id студента' });

      const alreadyAddedStudent = await lesson.hasStudent(student);
      if (alreadyAddedStudent) return res.status(404).send({ error: 'Указанный студент уже добавлен к данному уроку' });

      await lesson.addStudent(student);
      return res.status(200).send('Студент успешно добавлен к уроку');
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async removeAttendance(req, res) {
    const lessonId = req.params.id;
    try {
      const lesson = await Lesson.findByPk(lessonId);
      if (!lesson) return res.status(404).send({ error: 'Неверный id урока' });

      const { studentId } = req.body;
      const student = await Student.findByPk(studentId);
      if (!student) return res.status(404).send({ error: 'Неверный id студента' });

      const alreadyAddedStudent = await lesson.hasStudent(student);
      if (!alreadyAddedStudent) return res.status(404).send({ error: 'По данному уроку нет указанного студента' });

      await lesson.removeStudent(student);
      return res.status(200).send('Студент успешно удален');
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
