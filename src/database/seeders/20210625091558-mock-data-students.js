'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'Students', 
      [
        {
          firstname: 'John',
          surname: 'Doe',
          grade: 10,
          language: 'ENG',
          school: '71',
          parentsContacts: 'grandpa, +77777777',
          stream: 'SAT',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: 'Jane',
          surname: 'White',
          grade: 5,
          language: 'KZ',
          school: '121',
          parentsContacts: 'mother, +77017777',
          stream: 'NISH',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Students', null, {});
  }
};
