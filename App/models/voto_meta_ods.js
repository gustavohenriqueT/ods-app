const Sequelize = require('sequelize');
const database = require('../database/connection'); 

const VotoMetaOds = conn.define('voto_meta_ods',
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