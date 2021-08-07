const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

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
  const hashedPassword = await bcrypt.hash(password.toString(), salt);

  return hashedPassword;
};

module.exports = getPaymentStatus;
module.exports = getHashedPassword;
const checkLessonsTime = async (lessonModel, { teacherId, groupId, endTime, startTime }) => {
  const lessons = await lessonModel.findAll({
    where: {
      [Op.and]: [
        {
          [Op.or]: [{ teacherId }, { groupId }],
        },
        {
          [Op.and]: [
            {
              startTime: {
                [Op.lt]: endTime,
              },
            },
            {
              endTime: {
                [Op.gt]: startTime,
              },
            },
          ],
        },
      ],
    },
  });
  return !!lessons.length;
};

module.exports = { getPaymentStatus, checkLessonsTime };
