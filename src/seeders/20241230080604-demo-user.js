'use strict';

const { createPool } = require("mysql2");

module.exports = {
  up: async (queryInterface, Sequelize) => {    //up chạy bình thường thêm dữ liệu vào
    return queryInterface.bulkInsert('Users',[{
      firstName: 'John',
      lastName:'Doe',
      email:'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {   // down chạy rollback khi dữ liệu bị lỗi
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
