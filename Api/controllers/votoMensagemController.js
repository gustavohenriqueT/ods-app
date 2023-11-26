// controllers/votoMensagemController.js
const {VotoMensagem} = require("../models/voto_mensagem_model"); // Ajuste o caminho conforme necessário
const {Sequelize} = require('sequelize')
async function createVotoMensagem(req, res) {
    const {idusuario, idmensagem, voto_mensagem} = req.body;

    try {
        // Criação do votoMensagem no banco de dados
        const newVotoMensagem = await VotoMensagem.create({
            idusuario,
            idmensagem,
            voto_mensagem,
        });

        console.log(
            newVotoMensagem
        );
        res.status(201).json({mensagem: "VotoMensagem cadastrado com sucesso"});
    } catch (err) {
        console.error("Erro ao cadastrar votoMensagem: " + err.message);
        res.status(500).json({mensagem: "Erro interno do servidor"});
    }
}

async function getVotoMensagens(req, res) {
    console.log(req.body)
    const idmensagem = req.body.idmensagem
    try {
        const votos = await VotoMensagem.findOne({
            attributes: [
                'idmensagem',
                [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN voto_mensagem = true THEN 1 WHEN voto_mensagem = false THEN -1 ELSE 0 END')), 'totalvotos']
            ],
            where:{idmensagem: idmensagem},
            group: ['idmensagem'],
            raw:true,
        })
        if(votos === null){
            let x = {idmensagem: idmensagem, totalvotos:0}
            res.status(200).json(x)
        }else{
            console.log(votos);
            res.status(200).json(votos);
        }

    } catch (err) {
        console.error("Erro ao buscar votos de mensagens: " + err.message);
        res.status(500).json({mensagem: "Erro interno do servidor"});
    }
}

module.exports = {
    createVotoMensagem,
    getVotoMensagens,
};
