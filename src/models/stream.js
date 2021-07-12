'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stream extends Model {
    static associate(models) {
      this.hasMany(models.Student, { foreignKey: 'streamId' });
    }
  }
  Stream.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Stream',
    }
  );
  return Stream;
};
