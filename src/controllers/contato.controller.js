const contatoModel = require('../models/contato.models');


function listarContatos(req, res) {
    const contatos = contatoModel.listarContatos();
    res.json(contatos);
}

function criarContato(req, res) {
    const {nome, telefone} = req.body;

    if (!nome) {
        return res.status(400).json({message: 'Nome é obrigatório!'});
    }

    if (!telefone) {
        return res.status(400).json({message: 'Telefone é obrigatório!'});
    }

    const novoContato = contatoModel.criarContato(nome, telefone);
    res.status(201).json(novoContato);
}

module.exports = {
    listarContatos,
    criarContato
}