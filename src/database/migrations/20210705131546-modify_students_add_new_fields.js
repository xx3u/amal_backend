'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Students', 'status', {
      allowNull: false,
      type: Sequelize.ENUM(
        'Активный',
        'В резерве',
        'Отчисленный',
        'В ожидании'
      ),
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Students', 'status'),
        queryInterface.sequelize.query(
          'DROP TYPE IF EXISTS "enum_Students_status"'
        ),
      ]);
    });
  },
};
