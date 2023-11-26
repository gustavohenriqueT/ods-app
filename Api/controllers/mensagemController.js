// controllers/mensagemController.js
const { Mensagem } = require("../models/mensagem_model");
const {Sequelize} = require("sequelize");
const {User} = require("../models/usuario_model");

async function createMensagem(req, res) {
  console.log(req.body)
  const { idusuario, mensagem} = req.body;

  try {
    // Criação da mensagem no banco de dados
    const newMensagem = await Mensagem.create({
      mensagem,
      idusuario,
    });

    console.log("Mensagem cadastrada com sucesso, ID:", newMensagem.idmensagem);
    res.status(201).json({ mensagem: "Mensagem cadastrada com sucesso" });
  } catch (err) {
    console.error("Erro ao cadastrar mensagem: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

async function getMensagens(req, res) {
  try {
    const mensagens = await Mensagem.findAll({
      attributes: ['idmensagem', 'mensagem', 'idusuario'],
      include: [{
        model: User,
        attributes: ['nome'],
        required: true, // INNER JOIN
        on: {
          idusuario: Sequelize.literal('`Mensagem`.`idusuario` = `User`.`idusuario`'),
        },
      }],
    });
    res.status(200).json(mensagens);
  } catch (err) {
    console.error("Erro ao buscar usuários: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = {
  createMensagem,
  getMensagens,
};
