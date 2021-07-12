'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Stream, { foreignKey: 'streamId' });
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
