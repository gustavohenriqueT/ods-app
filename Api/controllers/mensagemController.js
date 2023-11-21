// controllers/mensagemController.js
const { Mensagem } = require("../models/mensagem_model"); // Ajuste o caminho conforme necessário

async function createMensagem(req, res) {
  const { mensagem, date_time, idusuario } = req.body;

  try {
    // Criação da mensagem no banco de dados
    const newMensagem = await Mensagem.create({
      mensagem,
      date_time,
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
    const mensagens = await Mensagem.findAll();
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
