'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Payments', [
      {
        studentId: 1,
        date: '2021-7-14',
        amount: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 2,
        date: '2021-7-12',
        amount: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 3,
        date: '2021-6-12',
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
