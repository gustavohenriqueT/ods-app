// controllers/votoMensagemController.js
const { VotoMensagem } = require("../models/voto_mensagem_model"); // Ajuste o caminho conforme necessário

async function createVotoMensagem(req, res) {
  const { idusuario, idmensagem, voto_mensagem } = req.body;

  try {
    // Criação do votoMensagem no banco de dados
    const newVotoMensagem = await VotoMensagem.create({
      idusuario,
      idmensagem,
      voto_mensagem,
    });

    console.log(
      "VotoMensagem cadastrado com sucesso, ID:",
      newVotoMensagem.idvoto_mensagem
    );
    res.status(201).json({ mensagem: "VotoMensagem cadastrado com sucesso" });
  } catch (err) {
    console.error("Erro ao cadastrar votoMensagem: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

async function getVotoMensagens(req, res) {
  try {
    const votoMensagens = await VotoMensagem.findAll();
    res.status(200).json(votoMensagens);
  } catch (err) {
    console.error("Erro ao buscar votos de mensagens: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = {
  createVotoMensagem,
  getVotoMensagens,
};
