const Stream = require('../models').Stream;

module.exports = {
  async getAll(req, res) {
    try {
      const stream = await Stream.findAll();
      return res.status(200).send(stream);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async addNew(req, res) {
    const newStream = req.body;
    try {
      const createdStream = await Stream.create(newStream);
      return res.send(createdStream);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getById(req, res) {
    try {
      const stream = await Stream.findByPk(req.params.id);
      if (stream) {
        return res.status(200).send(stream);
      } else {
        return res.status(404).send({ error: 'Stream with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateOne(req, res) {
    try {
      const stream = await Stream.findByPk(req.params.id);
      if (stream) {
        const updatedStream = await stream.update({
          streamName: req.body.name || stream.name,
        });
        return res.send(updatedStream);
      } else {
        return res.status(404).send({ error: 'Stream with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async deleteById(req, res) {
    try {
      const stream = await Stream.findByPk(req.params.id);
      if (stream) {
        await stream.destroy();
        return res.send('the stream was deleted');
      } else {
        return res.status(404).send({ error: 'Stream with this id was not found' });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
};
