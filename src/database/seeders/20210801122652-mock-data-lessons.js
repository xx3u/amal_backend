'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Lessons', [
      {
        startTime: '2021-01-31T09:00:00.000Z',
        endTime: '2021-01-31T10:00:00.000Z',
        groupId: 1001,
        subjectId: 1001,
        teacherId: 1001,
      },
      {
        startTime: '2021-01-31T10:00:00.000Z',
        endTime: '2021-01-31T11:00:00.000Z',
        groupId: 1001,
        subjectId: 1002,
        teacherId: 1002,
      },
      {
        startTime: '2021-01-31T09:00:00.000Z',
        endTime: '2021-01-31T10:00:00.000Z',
        groupId: 1002,
        subjectId: 1002,
        teacherId: 1002,
      },
      {
        startTime: '2021-01-31T10:00:00.000Z',
        endTime: '2021-01-31T11:00:00.000Z',
        groupId: 1002,
        subjectId: 1001,
        teacherId: 1001,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Lessons', null, {});
  },
};
