const accessByRole = (...role) => {
  return async (req, res, next) => {
    const userRole = req.user && req.user.role.toString();
    if (!role.includes(userRole)) {
      return res.status(403).send('You do not have access to this page');
    }
    next();
  };
};

module.exports = accessByRole;
