'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Streams', [
      {
        id: 1001,
        name: 'NIS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1002,
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
