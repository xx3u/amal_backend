'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      this.belongsTo(models.Student, { foreignKey: 'studentId' });
    }
  }
  Payment.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.VIRTUAL,
        get() {
          const currentDate = new Date();
          const paymentDate = this.getDataValue('date');
          const dateCopy = new Date(paymentDate);

          function dateWithMonthsDelay() {
            dateCopy.setMonth(dateCopy.getMonth() + 1);
            if (paymentDate.getDate() !== dateCopy.getDate()) {
              const dateCopy2 = new Date(paymentDate);
              return new Date(dateCopy2.getFullYear(), dateCopy2.getMonth() + 2, 1);
            }
            return dateCopy;
          }
          const dateLimit = dateWithMonthsDelay();

          return currentDate < dateLimit;
        },
      },
    },
    {
      sequelize,
      modelName: 'Payment',
    }
  );
  return Payment;
};
