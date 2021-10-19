'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
  
    static associate(models) {
      this.belongsToMany(models.Cliente, { through: "clientes_chats", as: "clientes" });
      this.hasMany(models.Mensagem, { foreignKey: "chat_id" });
    }
  };
  Chat.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};