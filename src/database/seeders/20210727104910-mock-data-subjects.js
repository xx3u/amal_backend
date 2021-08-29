'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Subjects', [
      {
        id: 1001,
        subjectName: 'Math',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1002,
        subjectName: 'Physics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Subjects', null);
  },
};
