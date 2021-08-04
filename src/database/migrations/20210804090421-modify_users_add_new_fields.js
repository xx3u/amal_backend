'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
    }),
      await queryInterface.addColumn('Users', 'password', {
        type: Sequelize.STRING,
        allowNull: true,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Users', 'name');
    await queryInterface.removeColumn('Users', 'password');
  },
};
