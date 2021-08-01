'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Lessons', [
      {
        startTime: '2021-01-31T09:00:00.000Z',
        endTime: '2021-01-31T10:00:00.000Z',
        groupId: 1,
        subjectId: 1,
        teacherId: 1,
      },
      {
        startTime: '2021-01-31T10:00:00.000Z',
        endTime: '2021-01-31T11:00:00.000Z',
        groupId: 1,
        subjectId: 2,
        teacherId: 2,
      },
      {
        startTime: '2021-01-31T09:00:00.000Z',
        endTime: '2021-01-31T10:00:00.000Z',
        groupId: 2,
        subjectId: 2,
        teacherId: 2,
      },
      {
        startTime: '2021-01-31T10:00:00.000Z',
        endTime: '2021-01-31T11:00:00.000Z',
        groupId: 2,
        subjectId: 1,
        teacherId: 1,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Lessons', null, {});
  },
};
