'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate(models) {
      this.belongsTo(models.Group, {
        foreignKey: 'groupId',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(models.Teacher, {
        foreignKey: 'teacherId',
        allowNull: false,
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(models.Subject, {
        foreignKey: 'subjectId',
        allowNull: false,
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Lesson.init(
    {
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
    },

    {
      sequelize,
      modelName: 'Lesson',
      timestamps: false,
      initialAutoIncrement: 1000,
    }
  );
  return Lesson;
};
