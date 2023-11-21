const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_projeto", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const VotoMetaOds = sequelize.define(
  "votoMetaOds",
  {
    idvoto_meta_ods: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idmeta_ods: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    voto_ods: DataTypes.BOOLEAN,
  },
  {
    tableName: "voto_meta_ods", // Substitua pelo nome real da sua tabela
    timestamps: true, // Se a tabela não possui colunas createdAt e updatedAt
  }
);

module.exports = {
  VotoMetaOds,
};
