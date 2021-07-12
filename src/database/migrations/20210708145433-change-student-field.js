'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Students', 'stream'),
        queryInterface.addColumn('Students', 'streamId', {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Streams',
            key: 'id',
          },
        }),
        // queryInterface.addConstraint('Students', {
        //   type: 'FOREIGN KEY',
        //   fields: ['streamId'],
        //   name: 'FK_student_stream', // useful if using queryInterface.removeConstraint
        //   references: {
        //     table: 'Streams',
        //     field: 'id',
        //   },
        //   onDelete: 'cascade',
        //   onUpdate: 'cascade',
        // }),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        // queryInterface.removeConstraint('Students', 'FK_student_stream'),
        queryInterface.removeColumn('Students', 'streamId'),
        queryInterface.addColumn('Students', 'stream', {
          allowNull: false,
          type: Sequelize.STRING,
        }),
      ]);
    });
  },
};
