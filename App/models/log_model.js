const { Sequelize, sequelize } = require('../database/connection');

const Log = sequelize.define('log',
    {
      idlog : {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull : false,
          primaryKey: true
      },
      idusuario: Sequelize.INTEGER,
      idmensagem: Sequelize.INTEGER,
      voto_mensagem: Sequelize.BOOLEAN,
      id_meta_ods: Sequelize.INTEGER,
      idvoto_meta_ods: Sequelize.INTEGER,
      voto_ods: Sequelize.BOOLEAN
    }
);

module.exports = Log;