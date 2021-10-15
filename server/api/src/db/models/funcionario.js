'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    static associate(models) {
      this.belongsToMany(models.Cliente, { through: "assistencia", foreignKey: "cd_funcionario" });
    }

    isPasswordValid(password) {
      return bcrypt.compareSync(password, this.password);
    }
  };
  Funcionario.init({
    cd_funcionario: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nr_acesso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nm_funcionario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ds_senha: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        this.setDataValue("password", bcrypt.hashSync(password, 10));
      }
    }
  }, {
    sequelize,
    modelName: 'Funcionario',
  });
  return Funcionario;
};