'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Attendance',
      {
        lessonId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        studentId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
      }
    )
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Attendance');
  },
};
