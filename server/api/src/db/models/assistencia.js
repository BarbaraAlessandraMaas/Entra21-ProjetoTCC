'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Assistencia extends Model {
    static associate(models) {}
  };
  Assistencia.init({
    cd_cliente: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: 'clientes',
        key: 'cd_cliente'
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    cd_funcionario: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: "funcionarios",
        key: "cd_funcionario"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    ds_mensagem: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Assistencia',
  });
  return Assistencia;
};