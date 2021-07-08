'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Students', [
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
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Students', null, {});
  },
};
