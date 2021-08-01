'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Subject, { foreignKey: 'subjectId' });
      this.hasMany(models.Lesson, { foreignKey: 'teacherId' });
    }
  }
  Teacher.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
