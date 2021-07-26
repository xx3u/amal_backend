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
          let dateLimit = new Date(paymentDate);

          dateLimit.setMonth(dateLimit.getMonth() + 1);

          if (paymentDate.getDate() !== dateLimit.getDate()) {
            const dateCopy = new Date(paymentDate);
            dateLimit = new Date(dateCopy.getFullYear(), dateCopy.getMonth() + 2, 1);
          }

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
