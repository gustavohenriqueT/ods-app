const { Sequelize, sequelize } = require('../database/connection');

const Usuario = sequelize.define('usuario',
  {
    idusuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull : false,
      primaryKey: true
    },
    nome: Sequelize.STRING,
    sobrenome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
  }
);

module.exports = Usuario;