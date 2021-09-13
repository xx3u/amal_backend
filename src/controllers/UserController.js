const User = require('../models').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Teacher = require('../models').Teacher;
const tokenList = {};

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
        expiresIn: '20s',
      });
      const refreshToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_REFRESH_TOKEN, {
        expiresIn: '7d',
      });

      const response = {
        username: user.username,
        token: jwtToken,
        refreshToken: refreshToken,
        role: user.role,
        teacher: user.Teacher,
      };

      tokenList[refreshToken] = response;
      return res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async token(req, res) {
    try {
      const { username, refreshToken } = req.body;
      if (refreshToken && refreshToken in tokenList) {
        const user = await User.findOne({
          where: { username },
        });
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET_KEY, {
          expiresIn: '20s',
        });
        const response = {
          token: token,
        };
        tokenList[refreshToken].token = token;
        res.status(200).json(response);
      } else {
        res.status(404).send('Invalid request');
      }
    } catch {
      res.status(500).send(error);
    }
  },
};
