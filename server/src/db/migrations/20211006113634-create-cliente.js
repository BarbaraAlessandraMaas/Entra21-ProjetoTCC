'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clientes', {
      cd_cliente: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      nm_cliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nr_cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      ds_senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nr_telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ds_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clientes');
  }
};