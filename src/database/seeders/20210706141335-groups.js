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
    ]);
  },
  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Groups', null, {});
  },
};
