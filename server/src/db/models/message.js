'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    
    static associate(models) {
      this.belongsTo(models.Chat, { foreignKey: "chat_id" });
      this.belongsTo(models.Cliente, { foreignKey: "cd_cliente" });
    }
  };
  Message.init({
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};