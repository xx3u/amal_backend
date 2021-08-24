'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      this.belongsTo(models.Group, { foreignKey: 'groupId' });
      this.belongsTo(models.Stream, { foreignKey: 'streamId' });
      this.hasMany(models.Payment, { foreignKey: 'studentId' });
      this.hasMany(models.Payment, { as: 'LastPayment', foreignKey: 'studentId' });
      this.belongsToMany(models.Lesson, { through: 'Attendance', foreignKey: 'lessonId', timestamps: false });
    }
  }
  Student.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      grade: DataTypes.INTEGER,
      language: DataTypes.STRING,
      school: DataTypes.STRING,
      parentsContacts: DataTypes.STRING,
      streamId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.ENUM('Активный', 'В резерве', 'Отчисленный', 'В ожидании'),
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );

  return Student;
};
