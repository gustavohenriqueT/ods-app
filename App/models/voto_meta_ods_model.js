const { Sequelize, sequelize } = require('../database/connection');

const VotoMetaOds = sequelize.define('voto_meta_ods',
  {
    idvoto_meta_ods: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull : false,
      primaryKey: true
    },
    idusuario: {
      type: Sequelize.INTEGER,
      allowNull : false,
    },
    idmeta_ods: {
      type: Sequelize.INTEGER,
      allowNull : false,
    },
    voto_ods: Sequelize.BOOLEAN,
  }
);

module.exports = VotoMetaOds;