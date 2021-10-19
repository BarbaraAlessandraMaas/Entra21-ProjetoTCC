'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Plano extends Model {
    static associate(models) {
      this.hasMany(models.Pagamento, { foreignKey: "cd_plano"});
    }
  };
  Plano.init({
    cd_plano: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nm_plano: {
      type: DataTypes.STRING
    },
    ds_velocidade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vl_plano: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ds_plano: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Plano',
  });
  return Plano;
};