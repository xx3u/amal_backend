'use strict';
const { Model } = require('sequelize');
const { getPaymentStatus } = require('../helpers');

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
          return getPaymentStatus(this.getDataValue('date'));
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
