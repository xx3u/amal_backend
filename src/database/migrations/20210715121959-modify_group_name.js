'use strict';

module.exports = {
  up: async (queryInterface) => {
    queryInterface.addConstraint('Groups', {
      fields: ['groupName'],
      type: 'unique',
      name: 'constraint_unique_groupname',
    });
  },

  down: async (queryInterface) => {
    queryInterface.removeConstraint('Groups', 'constraint_unique_groupname');
  },
};
