'use strict';

module.exports = {
  up: async (queryInterface) => {
    queryInterface.addConstraint('Groups', {
      fields: ['groupName'],
      type: 'unique',
    });
  },

  down: async (queryInterface) => {
    queryInterface.removeConstraint('Groups', {
      fields: ['groupName'],
      type: 'unique',
    });
  },
};
