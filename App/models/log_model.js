const Sequelize = require('sequelize');
const database = require('../database/connection'); 

const Log = conn.define('log',
    {
      idlog : {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull : false,
          primaryKey: true
      },
      idusuario: Sequelize.INTEGER,
      idmensagem: Sequelize.INTEGER,
      voto_mensagem: Sequelize.INTEGER,
      id_meta_ods: Sequelize.INTEGER,
      idvoto_meta_ods: Sequelize.INTEGER,
      voto_ods: Sequelize.INTEGER
    }
);

module.exports = Log;