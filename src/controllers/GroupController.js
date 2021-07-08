const Group = require('../models').Group;

module.exports = {
  async getAll(req, res) {
    try {
      const groups = await Group.findAll();
      return res.status(200).send(groups);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async addNew(req, res) {
    const newGroup = req.body;
    try {
      const createdGroup = await Group.create(newGroup);
      return res.send(createdGroup);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getById(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (group) {
        return res.status(200).send(group);
      } else {
        return res.status(400).send({ error: 'Group with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateOne(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (group) {
        const updatedGroup = await group.update({
          groupName: req.body.groupName || group.groupName,
        });
        return res.send(updatedGroup);
      } else {
        return res.status(400).send({ error: 'Group with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async deleteById(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (group) {
        await group.destroy({
          groupName: req.body.groupName || group.groupName,
        });
        return res.send('the group was deleted');
      } else {
        return res.status(400).send({ error: 'Group with this id was not found' });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
