'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('Groups', {
      fields: ['groupName'],
      type: 'unique',
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('Groups', {
      fields: ['groupName'],
      type: 'unique',
    });
  },
};
