'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
    static associate(models) {
      this.belongsTo(models.Cliente, { foreignKey: "cd_cliente"});
      this.belongsTo(models.Cliente, { foreignKey: "cd_plano"});
    }
  };
  Pagamento.init({
    cd_pagamento: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    ds_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dt_vencimento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cd_plano: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: "planos",
        key: "cd_plano"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    cd_cliente: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: "clientes",
        key: "cd_cliente"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    }
  }, {
    sequelize,
    modelName: 'Pagamento',
  });
  return Pagamento;
};