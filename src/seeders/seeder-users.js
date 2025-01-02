'use strict';

const { createPool } = require("mysql2");

module.exports = {
  up: async (queryInterface, Sequelize) => {    //up chạy bình thường thêm dữ liệu vào
    return queryInterface.bulkInsert('Users',[{
      email:'admin@gmail.com',
      password: '123456', // plain text là 123456, hash pasword là mã hóa mk
      firstName: 'hieu',
      lastName:'kieu',
      address:'HaNoi',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',    
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
