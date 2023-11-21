// app.js
const express = require("express");
const bodyParser = require("body-parser");
const logController = require("./controllers/logController"); // Ajuste o caminho conforme necessário
const userController = require("./controllers/userController"); // Ajuste o caminho conforme necessário
const mensagemController = require("./controllers/mensagemController"); // Ajuste o caminho conforme necessário
const odsController = require("./controllers/odsController"); // Ajuste o caminho conforme necessário
const votoMensagemController = require("./controllers/votoMensagemController"); // Ajuste o caminho conforme necessário
const votoMetaOdsController = require("./controllers/votoMetaOdsController"); // Ajuste o caminho conforme necessário

const app = express();
const port = 3007;

// Middleware para análise de corpo JSON
app.use(bodyParser.json());

// Rota para cadastrar um log
app.post("/logs", logController.createLog);

// Rota para obter todos os logs
app.get("/logs", logController.getLogs);

// Rota para cadastrar um user
app.post("/user", userController.createUser);

// Rota para obter todos os users
app.get("/users", userController.getUsers);

// Rota para cadastrar uma mensagem
app.post("/mensagens", mensagemController.createMensagem);

// Rota para obter todas as mensagens
app.get("/mensagens", mensagemController.getMensagens);

// Rota para cadastrar uma ods
app.post("/ods", odsController.createOds);

// Rota para obter todas as ods
app.get("/ods", odsController.getOdss);

// Rota para cadastrar um voto da mensagem
app.post("/votoMensagem", votoMensagemController.createVotoMensagem);

// Rota para obter todas os votos das mensagens
app.get("/votoMensagem", votoMensagemController.getVotoMensagens);

// Rota para cadastrar um voto da ods
app.post("/votoMetaOds", votoMetaOdsController.createVotoMetaOds);

// Rota para obter todas os votos das ods
app.get("/votoMetaOds", votoMetaOdsController.getVotoMetaOdss);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
