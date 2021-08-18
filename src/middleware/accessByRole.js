const accessByRole = (role) => {
  return async (req, res, next) => {
    if (req.user && req.user.role.toString() !== role) {
      return res.status(403).send('You do not have access to this page');
    }
    next();
  };
};

module.exports = accessByRole;
