// controllers/mensagemController.js
const { Ods } = require("../models/ods_model"); // Ajuste o caminho conforme necessário

async function createOds(req, res) {
  // Alterado de createMensagem para createOds
  const { nome_ods, descricao } = req.body;

  try {
    // Criação do Ods no banco de dados
    const newOds = await Ods.create({
      nome_ods,
      descricao,
    });

    console.log("Ods cadastrado com sucesso, ID:", newOds.idmeta_ods); // Alterado de id_meta_ods para idmeta_ods
    res.status(201).json({ mensagem: "Ods cadastrado com sucesso" });
  } catch (err) {
    console.error("Erro ao cadastrar Ods: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

async function getOdss(req, res) {
  try {
    const odss = await Ods.findAll();
    res.status(200).json(odss);
  } catch (err) {
    console.error("Erro ao buscar odss: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = {
  createOds, // Alterado de createMensagem para createOds
  getOdss,
};
