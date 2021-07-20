'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('Payments', 'status');
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Payments');
  },
};
