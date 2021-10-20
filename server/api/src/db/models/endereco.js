"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    static associate(models) {
      this.belongsTo(models.Cliente, { foreignKey: "cliente_id" });
    }
  };

  Endereco.init({
    logradouro: {
      type: DataTypes.STRING
    },
    bairro: {
      type: DataTypes.STRING
    },
    municipio: {
      type: DataTypes.STRING
    },
    complemento: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: "Endereco",
  });
  
  return Endereco;
};