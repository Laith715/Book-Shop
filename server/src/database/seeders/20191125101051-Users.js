'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bcrypt = require('bcrypt');
    return await new Promise((resolve, reject) => {
      bcrypt.hash('default', 11).then(hash => {
        const result = queryInterface.bulkInsert('Users', [{
          id: 715,
          firstName: 'Default',
          lastName: 'Default',
          email: 'default715@gmail.com',
          passwordHash: hash,
          creationDateTimeUTC: new Date(),
        }], {});
        resolve(result);
      });
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', { where: { email: 'default715@gmail.com' } }, {});
  }
};
