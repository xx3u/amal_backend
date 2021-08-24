'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.bulkDelete('Teachers', null, { transaction: t });
      await queryInterface.bulkInsert(
        'Teachers',
        [
          {
            id: 1001,
            firstName: 'Duisen',
            lastName: 'Atabasov',
            language: 'KZ',
            telephone: '87776665544',
            email: 'duisen@qwer.com',
            subjectId: 1001,
            userId: 1001,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 1002,
            firstName: 'Roza',
            lastName: 'Ismailova',
            language: 'RU',
            telephone: '87776665545',
            email: 'roza@qwer.com',
            subjectId: 1002,
            userId: 1002,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        { transaction: t }
      );
    });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Teachers', null, {});
  },
};
