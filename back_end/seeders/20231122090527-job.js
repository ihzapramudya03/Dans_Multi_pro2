'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require('../data/job.json');
    data.forEach((el) => {
      (el.createdAt = new Date()), (el.updatedAt = new Date());
    });
    await queryInterface.bulkInsert("Jobs", data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jobs", null, {});
  }
};
