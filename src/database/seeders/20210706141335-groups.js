'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Groups', [
      {
        groupName: 'K1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupName: 'R7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupName: 'K3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
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
