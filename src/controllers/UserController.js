const User = require('../models').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Teacher = require('../models').Teacher;

module.exports = {
  async register(req, res) {
    try {
      const { username, password, role, teacherId } = req.body;
      const alreadyExistsUser = await User.findOne({ where: { username } });
      if (alreadyExistsUser) {
        return res.status(400).send({ error: 'Пользователь с таким логином уже существует' });
      }
      if (role === 'teacher' && !teacherId) {
        return res.status(400).send({ error: 'Учитель не выбран' });
      }
      if (role === 'admin' && teacherId) {
        return res.status(400).send({ error: 'Не нужны данные учителя' });
      }
      const newUser = await User.create({ username, password, role });
      if (teacherId) {
        const teacher = await Teacher.findByPk(teacherId);
        if (!teacher) {
          return res.status(400).send({ error: 'Id учителя не найден' });
        }
        newUser.setTeacher(teacher);
      }
      return res.status(200).send('Успешно зарегистрирован');
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({
        where: { username },
        include: { model: Teacher, attributes: ['id', 'firstName', 'lastName'] },
      });
      if (!user) {
        return res.status(400).send({ error: 'Неверно указан логин или пароль, попробуйте еще раз.' });
      }

      const isVaildPassword = await bcrypt.compare(password, user.password);
      if (!isVaildPassword) {
        return res.status(400).send({ error: 'Неверно указан логин или пароль, попробуйте еще раз.' });
      }

      const jwtToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET_KEY, {
        expiresIn: '60m',
      });

      const userWithToken = {
        username: user.username,
        token: jwtToken,
        role: user.role,
        teacher: user.Teacher,
      };

      return res.status(200).send(userWithToken);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
