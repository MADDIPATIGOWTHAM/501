'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // Adding a new column 'newColumn' to the 'Sports' table
    await queryInterface.addColumn('Sports', 'sessionId', {
      type: Sequelize.STRING,
      allowNull: true, // Adjust this based on your requirements
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    // Removing the added column 'newColumn' from the 'Sports' table during rollback
    await queryInterface.removeColumn('Sports', 'sessionId');
  }
};
