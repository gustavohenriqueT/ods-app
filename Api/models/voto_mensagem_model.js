const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_projeto", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const VotoMensagem = sequelize.define(
  "votoMensagem",
  {
    idvoto_mensagem: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idmensagem: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    voto_mensagem: DataTypes.BOOLEAN,
  },
  {
    tableName: "voto_mensagem", // Substitua pelo nome real da sua tabela
    timestamps: true, // Se a tabela não possui colunas createdAt e updatedAt
  }
);

module.exports = {
  VotoMensagem,
};
