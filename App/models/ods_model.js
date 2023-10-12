const Sequelize = require('sequelize');
const database = require('../database/connection'); 

const Ods = conn.define('ods',
  {
    idmeta_ods: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull : false,
      primaryKey: true
    },
    nome_ods: Sequelize.STRING,
    descricao: Sequelize.STRING
  }
);

module.exports = Ods;