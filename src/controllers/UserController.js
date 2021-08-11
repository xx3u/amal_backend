const User = require('../models').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  async register(req, res) {
    try {
      const { username, password, role } = req.body;
      const alreadyExistsUser = await User.findOne({ where: { username } });
      if (alreadyExistsUser) {
        return res.status(400).send({ error: 'User with this username already exists' });
      }
      const newUser = await User.create({ username, password, role });
      await newUser.save();
      return res.status(200).send(newUser);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(400).send({ error: 'username or password does not match' });
      }

      const isVaildPassword = await bcrypt.compare(password, user.password);
      if (!isVaildPassword) {
        return res.status(400).send({ error: 'username or password does not match' });
      }

      const jwtToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET_KEY);

      return res.status(200).send(jwtToken);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
