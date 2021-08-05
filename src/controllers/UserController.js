const User = require('../models').User;
const getHashedPassword = require('../helpers/helpers');

module.exports = {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const alreadyExistsUser = await User.findOne({ where: { username } });
      if (alreadyExistsUser) {
        return res.status(500).send('User with this username already exists');
      }
      const hashedPassword = await getHashedPassword(password);
      const newUser = await new User({ username, password: hashedPassword });
      await newUser.save();
      return res.status(200).send(newUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
