'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
   
    static associate(models) {
      this.belongsTo(models.Cliente, { foreignKey: "cliente_id"});
      this.belongsTo(models.Plano, { foreignKey: "plano_id"});
    }
  };
  Pagamento.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vencimento: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pagamento',
  });
  return Pagamento;
};