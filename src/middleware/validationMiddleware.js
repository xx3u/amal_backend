// eslint-disable-next-line no-unused-vars
const Joi = require('joi');

const validationMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      res.send(err);
    }
  };
};

module.exports = validationMiddleware;
