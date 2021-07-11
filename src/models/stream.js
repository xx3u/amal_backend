'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stream extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Student, { as: 'students' });
    }
  }
  Stream.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'stream',
    }
  );
  return Stream;
};
