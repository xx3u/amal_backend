'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Student, { foreignKey: 'groupId', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    }
  }
  Group.init(
    {
      groupName: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Group',
    }
  );

  return Group;
};
