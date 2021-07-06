'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Groups', [
      {
        groupName: 'K1',
      },
      {
        groupName: 'R7',
      },
      {
        groupName: 'K3',
      },
      {
        groupName: 'R4',
      },
    ]);
  },
  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Groups', null, {});
  },
};
