'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        { id: 1, username: 'teacher1', password: 'teacher1', createdAt: new Date(), updatedAt: new Date() },
        { id: 2, username: 'teacher2', password: 'teacher2', createdAt: new Date(), updatedAt: new Date() },
        { id: 3, username: 'admin1', password: 'admin1', createdAt: new Date(), updatedAt: new Date() },
        { id: 4, username: 'student1', password: 'student1', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
