const sequelize = require('sequelize');

const conn = new sequelize(
    'db_projeto', 'root', 'root',
    {
        host : "localhost",
        dialect : "mysql"
    }
);

module.exports = conn;