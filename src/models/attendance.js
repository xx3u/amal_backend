const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      this.belongsTo(models.Student, {
        foreignKey: 'studentId',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(models.Lesson, {
        foreignKey: 'lessonId',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  };
  Attendance.init({
  }, {
    sequelize,
    modelName: 'Attendance',
    timestamps: false,
  });
  return Attendance;
};