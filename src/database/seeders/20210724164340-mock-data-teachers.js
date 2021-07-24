'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Teachers',
      [
        {
          firstName: 'Duisen',
          lastName: 'Atabasov',
          language: 'kaz',
          telephone: '87776665544',
          email: 'duisen@qwer.com',
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Roza',
          lastName: 'Ismailova',
          language: 'ru',
          telephone: '87776665545',
          email: 'roza@qwer.com',
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', null);
  },
};
