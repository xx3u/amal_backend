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
      name: { type: DataTypes.STRING, unique: { msg: 'Имя направления должно быть уникальным' } },
    },
    {
      sequelize,
      modelName: 'Stream',
    }
  );
  return Stream;
};
