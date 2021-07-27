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
              id: 1,
              firstName: 'John',
              lastName: 'Doe',
              grade: 10,
              language: 'ENG',
              school: '71',
              parentsContacts: 'grandpa, +77777777',
              streamId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'Активный',
              groupId: 1,
            },
            {
              id: 2,
              firstName: 'Jane',
              lastName: 'Doe',
              grade: 5,
              language: 'KZ',
              school: '121',
              parentsContacts: 'mother, +77017777',
              streamId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'В ожидании',
              groupId: 2,
            },
            {
              id: 3,
              firstName: 'Jane_no_group',
              lastName: 'Doe2',
              grade: 5,
              language: 'KZ',
              school: '121',
              parentsContacts: 'mother, +77017777',
              streamId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'В ожидании',
              groupId: null,
            },
            {
              id: 4,
              firstName: 'John',
              lastName: 'Doe',
              grade: 10,
              language: 'ENG',
              school: '71',
              parentsContacts: 'grandpa, +77777777',
              streamId: 2,
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
  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Students', null);
  },
};
