const pool = require('../config/database');

async function listarContatos() {
    const buscarContatos = await pool.query('SELECT * FROM contatos');
    return buscarContatos[0];
}

async function criarContato(nome, telefone) {
    const novoContato = await pool.query(`INSERT INTO contatos (nome, telefone) VALUES ('${nome}', '${telefone}')`); {
        return novoContato[0];
    }
}


module.exports = { 
    listarContatos,
     criarContato 
    };