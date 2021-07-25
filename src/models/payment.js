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
      statusPayment: {
        type: DataTypes.VIRTUAL,
        get() {
          const currentDate = new Date();
          const paymentDate = this.getDataValue('date');
          const copyOfDate = new Date(paymentDate);

          function dateWithMonthsDelay() {
            copyOfDate.setMonth(copyOfDate.getMonth() + 1);

            return copyOfDate;
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
