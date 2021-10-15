'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    static associate(models) {
      this.belongsTo(models.Cliente, { foreignKey: "cd_cliente"});
    }
  };
  Endereco.init({
    cd_endereco: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    ds_logradouro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ds_complemento: {
      type: DataTypes.STRING
    },
    nm_bairro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nm_municipio: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: 'Endereco',
  });
  return Endereco;
};