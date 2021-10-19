'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
   
    static associate(models) {
      this.belongsTo(models.Chat, { foreignKey: "chat_id" });
      this.belongsTo(models.Cliente, { foreignKey: "cliente_id" });
    }
  };
  Mensagem.init({
    mensagem: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Mensagem',
  });
  return Mensagem;
};