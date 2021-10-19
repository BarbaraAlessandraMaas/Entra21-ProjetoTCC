'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plano extends Model {
    
    static associate(models) {
      this.hasMany(models.Pagamento, { foreignKey: "plano_id"});
    }
  };
  Plano.init({
    plano:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    velocidade:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao:  {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Plano',
  });
  return Plano;
};