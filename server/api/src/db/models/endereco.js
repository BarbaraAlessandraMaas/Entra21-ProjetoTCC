'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
   
    static associate(models) {
      this.belongsTo(models.Cliente, { foreignKey: "cliente_id"});
    }
  };
  Endereco.init({
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bairro:{
      type: DataTypes.STRING,
      allowNull: false
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complemento:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};