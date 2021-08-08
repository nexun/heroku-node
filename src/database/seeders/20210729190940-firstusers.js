'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {         
          firstName: "Franco",
          lastName: "Bellino",
          email: "john@doe.com",
          username:"franbellino",
          password: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "curso",
          lastName: "node",
          username:"cursonode",
          password: bcrypt.hashSync('123456', 8),
          email: "joh2n@doe.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
