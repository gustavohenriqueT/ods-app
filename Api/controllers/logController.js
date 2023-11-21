// controllers/logController.js
const { Log } = require("../models/log_model"); // Ajuste o caminho conforme necessário

async function createLog(req, res) {
  const {
    idusuario,
    idmensagem,
    voto_mensagem,
    id_meta_ods,
    idvoto_meta_ods,
    voto_ods,
  } = req.body;

  try {
    // Criação do log no banco de dados
    const newLog = await Log.create({
      idusuario,
      idmensagem,
      voto_mensagem,
      id_meta_ods,
      idvoto_meta_ods,
      voto_ods,
    });

    console.log("Log cadastrado com sucesso, ID:", newLog.idLog);
    res.status(201).json({ mensagem: "Log cadastrado com sucesso" });
  } catch (err) {
    console.error("Erro ao cadastrar log: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

async function getLogs(req, res) {
  try {
    const logs = await Log.findAll();
    res.status(200).json(logs);
  } catch (err) {
    console.error("Erro ao buscar logs: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = {
  createLog,
  getLogs,
};
