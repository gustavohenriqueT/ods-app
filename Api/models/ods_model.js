const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_projeto", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Ods = sequelize.define(
  "ods",
  {
    idmeta_ods: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome_ods: DataTypes.STRING,
    descricao: DataTypes.STRING,
  },
  {
    tableName: "ods", // Substitua pelo nome real da sua tabela
    timestamps: true, // Se a tabela não possui colunas createdAt e updatedAt
  }
);

module.exports = {
  Ods,
};
