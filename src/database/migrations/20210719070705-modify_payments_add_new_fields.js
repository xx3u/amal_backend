'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Payments', 'studentId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Students',
        key: 'id',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Payments', 'studentId');
  },
};
