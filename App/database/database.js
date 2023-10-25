const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./connection");
const Ods = require("../models/ods_model");
const Log = require("../models/log_model");
const Mensagem = require("../models/mensagem_model");
const Usuario = require("../models/usuario_model");
const VotoMensagem = require("../models/voto_mensagem_model");
const VotoMetaOds = require("../models/voto_meta_ods_model");

const db = express();

db.use(cors());
db.use(bodyParser.json());

db.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});

sequelize.sync({alter: true}).then(() => {
  console.log("Database & tables created!");
});


////////////////////////////////////////////////

///// Log
db.post("/adicionar-log", async (req, res) => {
  const { idusuario, idmensagem, voto_mensagem, id_meta_ods, idvoto_meta_ods, voto_ods } = req.body;
  await Log.create({ idusuario, idmensagem, voto_mensagem, id_meta_ods, idvoto_meta_ods, voto_ods });
  res.json({ mensagem: "Log adicionado" });
});

db.get("/log", async (req, res) => {
  const log = await Log.findAll();
  res.json(log);
});

///// Mensagem
db.post("/adicionar-mensagem", async (req, res) => {
  const { mensagem, date_time, idusuario } = req.body;
  await Mensagem.create({ mensagem, date_time, idusuario });
  res.json({ mensagem: "Mensagem adicionada" });
});

db.get("/mensagem", async (req, res) => {
  const mensagem = await Mensagem.findAll();
  res.json(mensagem);
});

///// Ods
db.post("/adicionar-ods", async (req, res) => {
  const { nome_ods, descricao } = req.body;
  await Ods.create({ nome_ods, descricao });
  res.json({ mensagem: "Ods adicionado" });
});

db.get("/ods", async (req, res) => {
  const ods = await Ods.findAll();
  res.json(ods);
});

///// Usuario
db.post("/adicionar-usuario", async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;
  await Usuario.create({ nome, sobrenome, email, senha });
  res.json({ mensagem: "Usuario adicionado" });
});

db.get("/usuario", async (req, res) => {
  const usuario = await Usuario.findAll();
  res.json(usuario);
});

///// Voto Mensagem
db.post("/adicionar-voto-mensagem", async (req, res) => {
  const { idusuario, idmensagem, voto_mensagem } = req.body;
  await VotoMensagem.create({ idusuario, idmensagem, voto_mensagem });
  res.json({ mensagem: "Voto Mensagem adicionado" });
});

db.get("/voto-mensagem", async (req, res) => {
  const voto_mensagem = await VotoMensagem.findAll();
  res.json(voto_mensagem);
});

///// Voto Meta Ods
db.post("/adicionar-voto-meta-ods", async (req, res) => {
  const { idusuario, idmeta_ods, voto_ods } = req.body;
  await VotoMetaOds.create({ idusuario, idmeta_ods, voto_ods });
  res.json({ mensagem: "Voto Meta Ods adicionado" });
});

db.get("/voto-meta-ods", async (req, res) => {
  const voto_meta_ods = await VotoMetaOds.findAll();
  res.json(voto_meta_ods);
});