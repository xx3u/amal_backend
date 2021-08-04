const User = require('../models').User;

module.exports = {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const alreadyExistsUser = await User.findOne({ where: { username } });
      if (alreadyExistsUser) {
        return res.status(500).send('User with this username already exists');
      }
      const newUser = await new User({ username, password });
      await newUser.save();
      return res.status(200).send('Thanks for registering');
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
