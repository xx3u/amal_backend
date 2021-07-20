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
      status: {
        type: DataTypes.VIRTUAL,
        get() {
          const currentDate = new Date();
          const paymentDate = this.getDataValue('date');
          return (
            paymentDate.getMonth() === currentDate.getMonth() && paymentDate.getFullYear() === currentDate.getFullYear()
          );
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
