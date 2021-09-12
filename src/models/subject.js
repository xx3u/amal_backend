'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate(models) {
      this.hasMany(models.Teacher, { foreignKey: 'subjectId', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
      this.hasMany(models.Lesson, { foreignKey: 'subjectId' });
    }
  }
  Subject.init(
    {
      subjectName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: 'Имя урока должно быть уникальным' },
      },
    },
    {
      sequelize,
      modelName: 'Subject',
    }
  );
  return Subject;
};
