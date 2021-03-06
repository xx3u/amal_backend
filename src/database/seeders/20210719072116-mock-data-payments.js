'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Payments', [
      {
        studentId: 1001,
        date: '2021-01-31T00:00:00.000Z',
        amount: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 1002,
        date: '2021-7-12T00:00:00.000Z',
        amount: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 1003,
        date: '2021-6-12T00:00:00.000Z',
        amount: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Payments', null);
  },
};
