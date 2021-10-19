'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {    
    static associate(models) {
      this.hasOne(models.Endereco, { foreignKey: "cliente_id" });
      this.hasMany(models.Pagamento, { foreignKey: "cliente_id" });
      this.belongsToMany(models.Chat, { through: "clientes_chats", as: "chats" });
      this.hasMany(models.Mensagem, { foreignKey: "cliente_id" });
    }

    isPasswordValid(password) {
      return bcrypt.compareSync(password, this.password);
    }

    toJSON() {
      return {
        ...this.get(),
        password: undefined
      }
    }
  };
  Cliente.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        this.setDataValue("password", bcrypt.genSaltSync(10));
      }
    },
    phone:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Invalid e-mail"}        
      }
    },
  },  
  {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};