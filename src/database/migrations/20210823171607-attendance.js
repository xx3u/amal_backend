'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Attendance',
      {
        LessonId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        StudentId: {
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
