'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Students', 'stream'),
        queryInterface.addColumn('Students', 'streamId', {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Streams',
            key: 'id',
          },
        }),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Students', 'streamId'),
        queryInterface.addColumn('Students', 'stream', {
          allowNull: false,
          type: Sequelize.STRING,
        }),
      ]);
    });
  },
};
