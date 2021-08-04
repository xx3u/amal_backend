'use strict';

module.exports = {
  up: (queryInterface) => {
    queryInterface.addConstraint('Groups', {
      fields: ['groupName'],
      type: 'unique',
      name: 'constraint_unique_groupname',
    });
  },

  down: (queryInterface) => {
    queryInterface.removeConstraint('Groups', 'constraint_unique_groupname');
  },
};
