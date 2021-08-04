module.exports = {
  async register(req, res) {
    try {
      console.log('req.body', req.body);
      return res.status(200).send('Hello world');
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
