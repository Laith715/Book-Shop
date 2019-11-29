'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Authors', [{
      id: 715,
      name: 'Author',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Authors', { where: { id: 715 } }, {});
  }
};
