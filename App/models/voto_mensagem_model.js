const Sequelize = require('sequelize');
const database = require('../database/connection'); 

const VotoMensagem = conn.define('voto_mensagem',
  {
    idvoto_mensagem: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull : false,
      primaryKey: true
    },
    idusuario: {
      type: Sequelize.INTEGER,
      allowNull : false,
    },
    idmensagem: {
      type: Sequelize.INTEGER,
      allowNull : false,
    },
    voto_mensagem: Sequelize.BOOLEAN,
  }
);

module.exports = VotoMensagem;