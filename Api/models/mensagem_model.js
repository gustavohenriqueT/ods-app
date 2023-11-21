const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_projeto", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Mensagem = sequelize.define(
  "Mensagem",
  {
    idmensagem: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    mensagem: DataTypes.STRING,
    date_time: DataTypes.DATE,
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "mensagem", // Substitua pelo nome real da sua tabela
    timestamps: true, // Se a tabela não possui colunas createdAt e updatedAt
  }
);

module.exports = {
  Mensagem,
};
