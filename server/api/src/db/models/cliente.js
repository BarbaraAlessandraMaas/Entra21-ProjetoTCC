'use strict';
const { Model } = require('sequelize');
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      this.belongsToMany(models.Chat, { through: "clientes_chats", as: "chats" })
      this.hasOne(models.Endereco, { foreignKey: "cd_cliente" });
      this.hasMany(models.Pagamento, { foreignKey: "cd_cliente" });
      this.belongsToMany(models.Funcionario, { through: "assistencia", foreignKey: "cd_cliente" });
      this.belongsTo(models.Message, { foreignKey: "cd_cliente" });
    }

    isPasswordValid(ds_senha) {
      return bcrypt.compareSync(ds_senha, this.ds_senha);
    }

      toJSON() {
    return {
      ...this.get(),
      ds_senha: undefined
    }
  }
};
Cliente.init({
  cd_cliente: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  nm_cliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nr_cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  ds_senha: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a password" }
    },
    set(ds_senha) {
      this.setDataValue("ds_senha", bcrypt.hashSync(ds_senha, 10));
    }
  },
  nr_telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ds_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: "E-mail Inválido!" }
    }
  }
}, {
  sequelize,
  modelName: 'Cliente',
});
return Cliente;
};