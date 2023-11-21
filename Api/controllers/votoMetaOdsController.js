// controllers/votoMetaOdsController.js
const { VotoMetaOds } = require("../models/voto_meta_ods_model"); // Ajuste o caminho conforme necessário

async function createVotoMetaOds(req, res) {
  const { idusuario, idmeta_ods, voto_ods } = req.body;

  try {
    // Criação do votoMetaOds no banco de dados
    const newVotoMetaOds = await VotoMetaOds.create({
      idusuario,
      idmeta_ods,
      voto_ods,
    });

    console.log(
      "VotoMetaOds cadastrado com sucesso, ID:",
      newVotoMetaOds.idvoto_meta_ods
    );
    res.status(201).json({ mensagem: "VotoMetaOds cadastrado com sucesso" });
  } catch (err) {
    console.error("Erro ao cadastrar votoMetaOds: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

async function getVotoMetaOdss(req, res) {
  try {
    const votoMetaOdss = await VotoMetaOds.findAll();
    res.status(200).json(votoMetaOdss);
  } catch (err) {
    console.error("Erro ao buscar votos de mensagens: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = {
  createVotoMetaOds,
  getVotoMetaOdss,
};
