'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Teachers',
      [
        {
          firstName: 'Duisen',
          lastName: 'Atabasov',
          language: 'KZ',
          telephone: '87776665544',
          email: 'duisen@qwer.com',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Roza',
          lastName: 'Ismailova',
          language: 'RU',
          telephone: '87776665545',
          email: 'roza@qwer.com',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Teachers', null);
  },
};
