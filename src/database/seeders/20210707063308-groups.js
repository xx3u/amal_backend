'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Groups', [
      {
        id: 1,
        groupName: 'K1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        groupName: 'R7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        groupName: 'K3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        groupName: 'R4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Groups', null, {});
  },
};
