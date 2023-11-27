const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_projeto", "luiz", "SysAdm1!", {
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
const Log = sequelize.define(
  "Log",
  {
    idLog: {
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
    voto_mensagem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    id_meta_ods: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idvoto_meta_ods: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    voto_ods: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "log",
    timestamps: true,
  }
);

module.exports = {
  Log,
};
