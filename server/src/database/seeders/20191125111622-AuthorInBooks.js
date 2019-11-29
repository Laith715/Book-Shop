'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('AuthorInBooks', [{
      id: 715,
      authorId: 715,
      printingEditionId: 715,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('AuthorInBooks', { where: { id: 715, }, }, {});
  }
};
