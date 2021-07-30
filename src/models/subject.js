'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate(models) {
      this.hasMany(models.Teacher, { foreignKey: 'subjectId', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    }
  }
  Subject.init(
    {
      subjectName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Subject',
    }
  );
  return Subject;
};
