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
      this.belongsToMany(models.Student, { through: 'Attendance', foreignKey: 'studentId', timestamps: false });
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
    }
  );
  return Lesson;
};
