'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Subject.init(
    {
      subjectName: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    {
      sequelize,
      modelName: 'Subject',
    }
  );
  return Subject;
};
