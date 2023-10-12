const Sequelize = require('sequelize');
const database = require('../database/connection'); 

const Mensagem = conn.define('mensagem',
  {
    idmensagem: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull : false,
      primaryKey: true
    },
    mensagem: Sequelize.STRING,
    date_time: Sequelize.DATE,
    idusuario: {
      type: Sequelize.INTEGER,
      allowNull : false,
      primaryKey: true
    },
  }
);

module.exports = Mensagem;