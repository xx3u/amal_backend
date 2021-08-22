'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Users',
          'username',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Users',
          'password',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'username', { transaction: t }),
        queryInterface.removeColumn('Users', 'password', { transaction: t }),
      ]);
    });
  },
};
