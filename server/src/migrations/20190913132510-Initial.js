'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: false,
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: false,
        },

        creationDateTimeUTC: Sequelize.DATE,

        passwordHash: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      }, { transaction });

      await queryInterface.createTable('Roles', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: false,
        },
      }, { transaction });

      await queryInterface.createTable('UserInRoles', {
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'Id',
          }
        },
        roleId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Roles',
            key: 'Id',
          },
        },
      }, { transaction });

      await queryInterface.createTable('Authors', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
        fullName: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: false,
        },
      }, { transaction });

      await queryInterface.createTable('PrintingEditions', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.INTEGER,
        },
        type: {
          type: Sequelize.ENUM,
          values: ['None', 'Book', 'Journal', 'NewsPaper']
        },
        currency: {
          type: Sequelize.STRING,
        },
      }, { transaction });

      await queryInterface.createTable('AuthorInBooks', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
        authorId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Authors',
            key: 'Id',
          },
        },
        printingEdtionId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'PrintingEditions',
            key: 'Id',
          },
        },
        creationDateTimeUTC: Sequelize.DATE,
      }, { transaction });

      await queryInterface.createTable('Orders', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'Id',
          },
        },
      }, { transaction });

      await queryInterface.createTable('Transactions', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
      })

      await queryInterface.createTable('Payments', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
        transactionId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Transactions',
            key: 'Id',
          },
        }
      }, { transaction });

      await queryInterface.createTable('OrderItems', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          field: 'Id',
          autoIncrement: true,
        },
        amount: {
          type: Sequelize.DECIMAL,
        },
        currency: {
          type: Sequelize.STRING,
        },
        printingEdtionId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'PrintingEditions',
            key: 'Id',
          },
        },
        count: {
          type: Sequelize.INTEGER,
        },
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('Users', { transaction });
      await queryInterface.dropTable('Roles', { transaction });
      await queryInterface.dropTable('UserInRoles', { transaction });
      await queryInterface.dropTable('Authors', { transaction });
      await queryInterface.dropTable('PrintingEditions', { transaction });
      await queryInterface.dropTable('AuthorInBooks', { transaction });
      await queryInterface.dropTable('Payments', { transaction });
      await queryInterface.dropTable('OrderItems', { transaction });
      await queryInterface.dropTable('Transactions', { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}