'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Students', 'groupId', {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'Groups',
        key: 'id',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('Students', 'groupId');
  },
};
