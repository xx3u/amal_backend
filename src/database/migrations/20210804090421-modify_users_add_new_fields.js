'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: true,
    }),
      await queryInterface.addColumn('Users', 'password', {
        type: Sequelize.STRING,
        allowNull: true,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Users', 'username');
    await queryInterface.removeColumn('Users', 'password');
  },
};
