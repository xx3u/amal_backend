'use strict';
const { getHashedPassword } = require('../../helpers');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1001,
          username: 'teacher1',
          password: getHashedPassword('teacher1'),
          role: 'teacher',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1002,
          username: 'teacher2',
          password: getHashedPassword('teacher2'),
          role: 'teacher',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1003,
          username: 'admin1',
          password: getHashedPassword('admin1'),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1004,
          username: 'student1',
          password: getHashedPassword('student1'),
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
