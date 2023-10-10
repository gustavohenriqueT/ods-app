const conn = require('./connection');

const db = conn.authenticate()
    .then(() => {
        console.log('\n Banco Conectado!')
    })
    .catch(erro => {
        console.log(erro);
    });

module.exports = db;