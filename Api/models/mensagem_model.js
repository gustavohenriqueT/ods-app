const { Sequelize, DataTypes } = require("sequelize");
const {User} = require("./usuario_model");

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
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
            model: User, // The model to which we want to create a foreign key
            key: 'idusuario', // The column in the User model that we want to reference
        },
    },
  },
  {
    tableName: "mensagem", // Substitua pelo nome real da sua tabela
    timestamps: true, // Se a tabela não possui colunas createdAt e updatedAt
  }
);
Mensagem.belongsTo(User, { foreignKey: 'idusuario' });
User.hasMany(Mensagem, { foreignKey: 'idusuario' });

module.exports = {
  Mensagem,
};
