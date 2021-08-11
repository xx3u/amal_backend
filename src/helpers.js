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
