'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      this.belongsToMany(models.Cliente, { through: "clientes_chats", as: "chats"  })
      this.belongsTo(models.Message, { foreignKey: "chat_id" });
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