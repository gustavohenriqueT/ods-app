const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./connection");
const Ods = require("../models/ods_model");

const db = express();

db.use(cors());
db.use(bodyParser.json());

db.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});

sequelize.sync().then(() => {
  console.log("Database & tables created!");
});


////////////////////////////////////////////////


db.post("/adicionar-ods", async (req, res) => {
  const { nome_ods, descricao } = req.body;
  await ODS.create({ nome_ods, descricao });
  res.json({ mensagem: "Ods adicionado" });
});

db.get("/ods", async (req, res) => {
  const ods = await Ods.findAll();
  res.json(ods);
});