'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    firstname: DataTypes.STRING,
    surname: DataTypes.STRING,
    middlename: DataTypes.STRING,
    grade: DataTypes.INTEGER,
    language: DataTypes.STRING,
    school: DataTypes.STRING,
    parentsContacts: DataTypes.STRING,
    stream: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};