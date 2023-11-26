// controllers/votoMensagemController.js
const {VotoMensagem} = require("../models/voto_mensagem_model"); // Ajuste o caminho conforme necessário
const {Sequelize} = require('sequelize')

async function createVotoMensagem(req, res) {
    const {idusuario, idmensagem, voto_mensagem} = req.body;
    const existingVote = await VotoMensagem.findOne({
        attributes: [
            'idmensagem','idusuario','voto_mensagem','idvoto_mensagem'
        ],
        where: {idmensagem: idmensagem, idusuario: idusuario},
        raw: true,
    });
    console.log("AQUI: ");console.log(voto_mensagem);
    if (existingVote===null){
        try {
            // Criação do votoMensagem no banco de dados
            await VotoMensagem.create({
                idusuario,
                idmensagem,
                voto_mensagem,
            });
            res.status(201).json({mensagem: "VotoMensagem cadastrado com sucesso"});
        } catch (err) {
            console.error("Erro ao cadastrar votoMensagem: " + err.message);
            res.status(500).json({mensagem: "Erro interno do servidor"});
        }

    }else if (existingVote.voto_mensagem ==  voto_mensagem) {
        console.log(existingVote)
        await VotoMensagem.destroy({
            where: {
                // Your condition here, for example:
                idvoto_mensagem: existingVote.idvoto_mensagem // Delete the record with id 1
            }
        })
        res.status(200).json("voto deletado")
        console.log('Voto Deletado');
    }else if(existingVote.voto_mensagem  != voto_mensagem) {
        console.log(existingVote.voto_mensagem)
        await VotoMensagem.update(
            {
                voto_mensagem: voto_mensagem,
            },
            {
                where: {
                    idusuario: idusuario,
                    idmensagem: idmensagem,
                },
            }
        );
        res.status(201).json({mensagem: "VotoMensagem atualizada com sucesso"});

    }
}

async function getVotoMensagens(req, res) {
    const idmensagem = req.body.idmensagem
    try {
        const votos = await VotoMensagem.findOne({
            attributes: [
                'idmensagem',
                [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN voto_mensagem = true THEN 1 WHEN voto_mensagem = false THEN -1 ELSE 0 END')), 'totalvotos']
            ],
            where: {idmensagem: idmensagem},
            group: ['idmensagem'],
            raw: true,
        })
        if (votos === null) {
            let x = {idmensagem: idmensagem, totalvotos: 0}
            res.status(200).json(x)
        } else {
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
