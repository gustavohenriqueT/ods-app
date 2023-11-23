const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_projeto", "root", "sysadm", {
  host: "localhost",
  dialect: "mysql",
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Sync the database
        await sequelize.sync({ force: true });

        // Your application logic here

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
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
