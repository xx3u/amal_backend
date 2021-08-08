const User = require('../models').User;
const { getHashedPassword } = require('../helpers/helpers');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const alreadyExistsUser = await User.findOne({ where: { username } });
      if (alreadyExistsUser) {
        return res.status(400).send({ error: 'User with this username already exists' });
      }
      const hashedPassword = await getHashedPassword(password);
      const newUser = await User.create({ username, password: hashedPassword });
      await newUser.save();
      return res.status(200).send(newUser);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async login(req, res) {
    try {
      const { username, password } = req.body;

      const userWithUsername = await User.findOne({ where: { username } });
      if (!userWithUsername) {
        return res.status(400).send({ error: 'Email or password does not match' });
      }

      const vaildPassword = await bcrypt.compare(password, userWithUsername.password);
      if (!vaildPassword) {
        return res.status(400).send({ error: 'Email or password does not match' });
      }

      const jwtToken = jwt.sign({ id: userWithUsername.id, email: userWithUsername.email }, process.env.JWT_KEY);

      return res.status(200).send(jwtToken);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
