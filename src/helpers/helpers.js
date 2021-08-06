const bcrypt = require('bcrypt');

const addOneMonth = (date) => {
  date.setMonth(date.getMonth() + 1);
  return date;
};

const getNextMonthLastDay = (date) => new Date(date.getFullYear(), date.getMonth() + 2, 0);

const getPaymentStatus = (paymentDate) => {
  const currentDate = new Date();
  const dateCopy = new Date(paymentDate);
  let dateLimit = addOneMonth(dateCopy);

  if (paymentDate.getDate() !== dateLimit.getDate()) {
    dateLimit = getNextMonthLastDay(paymentDate);
  }

  return currentDate < dateLimit;
};

const getHashedPassword = async (password) => {
  const SALT_WORK_FACTOR = 10;

  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

module.exports = getPaymentStatus;
module.exports = getHashedPassword;
