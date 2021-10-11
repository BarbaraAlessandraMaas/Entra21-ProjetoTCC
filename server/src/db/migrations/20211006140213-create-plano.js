'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('planos', {
      cd_plano: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      nm_plano: {
        type: Sequelize.STRING
      },
      ds_velocidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vl_plano: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      ds_plano: {
        type: Sequelize.STRING
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