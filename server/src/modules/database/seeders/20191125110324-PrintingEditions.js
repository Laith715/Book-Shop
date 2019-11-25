'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('PrintingEditions', [{
      id: 715,
      name: 'PrintingEdition',
      description: 'Development instance',
      price: 100,
      currency: 'USD',
      type: 'Book',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('PrintingEditions', { where: { id: 715 } }, {});
  }
};
