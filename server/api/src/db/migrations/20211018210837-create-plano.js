'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('planos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plano: {
        type: Sequelize.STRING,
        allowNull: false
      },
      velocidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('planos');
  }
};