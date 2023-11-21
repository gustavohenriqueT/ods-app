const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_projeto", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define(
  "User",
  {
    idusuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  },
  {
    tableName: "usuario", // Substitua pelo nome real da sua tabela
    timestamps: true, // Se a tabela não possui colunas createdAt e updatedAt
  }
);

module.exports = {
  User,
};
