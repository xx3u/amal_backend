'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Streams', [
      {
        name: 'NIS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SAT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Streams', null);
  },
};
