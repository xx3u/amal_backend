'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Payments', [
      {
        studentId: 3,
        status: true,
        date: '2021-7-14',
        amount: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 4,
        status: true,
        date: '2021-7-12',
        amount: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 5,
        status: false,
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
