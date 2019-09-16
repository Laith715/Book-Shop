'use strict';

export async function up(queryInterface, Sequelize) {
  const transaction = queryInterface.Sequelize.transaction();
  try {
    await queryInterface.craeteTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        field: 'Id',
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
    }, { transaction: transaction });


    await queryInterface.craeteTable('Authors', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        field: 'Id',
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
    }, { transaction: transaction });

    await queryInterface.craeteTable('PrintingEditions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        field: 'Id',
      },
      name: {
        type: Sequelize.STRING,
      }
    });

    await queryInterface.craeteTable('AuthorInBooks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        field: 'Id',
      },
      AuthorId: {
        type: Sequelize.INTEGER,
        references: {
          model: Author,
          key: 'Id',
        }
      },
      PrintingEdtionId: {
        type: Sequelize.INTEGER,
        references: {
          model: PrintingEdtion,
          key: 'Id',
        }
      },
      CreationDateTimeUTC: Sequelize.DATE,
    }, { transaction: transaction });

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

export async function down(queryInterface, Sequelize) {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
 
    Example:
    return queryInterface.dropTable('users');
  */
}
