'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
      id_course: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
        unique: true
      },
      course_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      course_description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      majer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_created: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Courses');
  }
};