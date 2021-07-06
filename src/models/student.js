<<<<<<< HEAD
"use strict";
const { Model } = require("sequelize");
=======
'use strict';
const { Model } = require('sequelize');
>>>>>>> 48c00a82bac7311d03bbe16a93ce669164efb5e3
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
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
      stream: DataTypes.STRING,
      address: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
<<<<<<< HEAD
      status: DataTypes.ENUM(
        "Активные",
        "В резерве",
        "Отчисленные",
        "В ожидании"
      ),
    },
    {
      sequelize,
      modelName: "Student",
=======
    },
    {
      sequelize,
      modelName: 'Student',
>>>>>>> 48c00a82bac7311d03bbe16a93ce669164efb5e3
    }
  );
  return Student;
};
