'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Groups', [
      {
        id: 1001,
        groupName: 'K1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1002,
        groupName: 'R7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1003,
        groupName: 'K3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1004,
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
