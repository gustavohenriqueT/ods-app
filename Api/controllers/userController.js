// controllers/userController.js
const { User } = require("../models/usuario_model"); // Ajuste o caminho conforme necessário

async function createUser(req, res) {
  const { nome, sobrenome, email, senha } = req.body;

  try {
    // Criação do usuário no banco de dados
    const newUser = await User.create({
      nome,
      sobrenome,
      email,
      senha,
    });

    console.log("Usuário cadastrado com sucesso, ID:", newUser.idusuario);
    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
  } catch (err) {
    console.error("Erro ao cadastrar usuário: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error("Erro ao buscar usuários: " + err.message);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = {
  createUser,
  getUsers,
};
