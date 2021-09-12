const validationMiddleware = (schema, options) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, options);
      next();
    } catch (err) {
      console.log(err.details);
      res.status(400).send(err.details[0].message);
    }
  };
};

module.exports = validationMiddleware;
