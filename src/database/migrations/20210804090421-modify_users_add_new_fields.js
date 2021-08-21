'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Users',
          'username',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Users',
          'password',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Users',
          'role',
          {
            type: Sequelize.ENUM('admin', 'teacher', 'student'),
            allowNull: false,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'username', { transaction: t }),
        queryInterface.removeColumn('Users', 'password', { transaction: t }),
        queryInterface.removeColumn('Users', 'role', { transaction: t }),
        queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Users_role"', { transaction: t }),
      ]);
    });
  },
};
