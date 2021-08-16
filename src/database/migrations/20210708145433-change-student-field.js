'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Students', 'streamId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Streams',
        key: 'id',
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('Students', 'streamId');
  },
};
