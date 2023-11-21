const { Sequelize, sequelize } = require('../database/connection');

const Mensagem = sequelize.define('mensagem',
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