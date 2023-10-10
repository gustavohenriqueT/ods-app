const sequelize = require('sequelize');
const conn = require('../database/connection');

const Usuario = conn.define('usuario',
    {
        idusuario : {
            type : sequelize.INTEGER,
            allowNull : true
        },
        nome : {
            type : sequelize.STRING,
            allowNull : false
        },
        sobrenome : {
          type : sequelize.STRING,
          allowNull : false
        },
        email : {
          type : sequelize.STRING,
          allowNull : false
        },
        senha : {
            type : sequelize.INTEGER,
            allowNull : false
        }
    }
);

module.exports = Usuario;