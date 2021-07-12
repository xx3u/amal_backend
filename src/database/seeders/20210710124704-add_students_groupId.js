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
              firstName: 'John',
              lastName: 'Doe',
              grade: 10,
              language: 'ENG',
              school: '71',
              parentsContacts: 'grandpa, +77777777',
              stream: 'SAT',
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'Активный',
              groupId: 1,
            },
            {
              firstName: 'Jane',
              lastName: 'Doe',
              grade: 5,
              language: 'KZ',
              school: '121',
              parentsContacts: 'mother, +77017777',
              stream: 'NISH',
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'В ожидании',
              groupId: 2,
            },
            {
              firstName: 'Jane_no_group',
              lastName: 'Doe2',
              grade: 5,
              language: 'KZ',
              school: '121',
              parentsContacts: 'mother, +77017777',
              stream: 'NISH',
              createdAt: new Date(),
              updatedAt: new Date(),
              status: 'В ожидании',
              groupId: null,
            },
            {
              firstName: 'John',
              lastName: 'Doe',
              grade: 10,
              language: 'ENG',
              school: '71',
              parentsContacts: 'grandpa, +77777777',
              stream: 'SAT',
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
