'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.bulkDelete('Students', null, { transaction: t }),
        queryInterface.bulkInsert(
          'Students',
          [
            {
              id: 1001,
              firstName: 'John',
              lastName: 'Doe',
              grade: 10,
              language: 'ENG',
              school: '71',
              parentsContacts: 'grandpa, +77777777',
              streamId: 1001,
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'Активный',
              groupId: 1001,
            },
            {
              id: 1002,
              firstName: 'Jane',
              lastName: 'Doe',
              grade: 5,
              language: 'KZ',
              school: '121',
              parentsContacts: 'mother, +77017777',
              streamId: 1002,
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'В ожидании',
              groupId: 1002,
            },
            {
              id: 1003,
              firstName: 'Jane_no_group',
              lastName: 'Doe2',
              grade: 5,
              language: 'KZ',
              school: '121',
              parentsContacts: 'mother, +77017777',
              streamId: 1001,
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'В ожидании',
              groupId: null,
            },
            {
              id: 1004,
              firstName: 'John',
              lastName: 'Doe',
              grade: 10,
              language: 'ENG',
              school: '71',
              parentsContacts: 'grandpa, +77777777',
              streamId: 1002,
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'Активный',
              groupId: null,
            },
          ],
          { transaction: t }
        ),
      ]);
    });
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Students', null);
  },
};
