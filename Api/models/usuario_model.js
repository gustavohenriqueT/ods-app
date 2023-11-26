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
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
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
