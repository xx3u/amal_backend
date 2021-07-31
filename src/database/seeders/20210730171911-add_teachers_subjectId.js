'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.bulkDelete('Teachers', null, { transaction: t });
      await queryInterface.bulkInsert(
        'Teachers',
        [
          {
            id: 1,
            firstName: 'Duisen',
            lastName: 'Atabasov',
            language: 'KZ',
            telephone: '87776665544',
            email: 'duisen@qwer.com',
            subjectId: 1,
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            firstName: 'Roza',
            lastName: 'Ismailova',
            language: 'RU',
            telephone: '87776665545',
            email: 'roza@qwer.com',
            subjectId: 2,
            userId: 2,
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
