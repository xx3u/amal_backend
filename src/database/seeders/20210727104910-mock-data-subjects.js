'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Subjects', [
      {
        id: 1,
        subjectName: 'Math',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
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
