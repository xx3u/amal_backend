'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Teacher.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      language: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Teacher',
    }
  );
  return Teacher;
};
