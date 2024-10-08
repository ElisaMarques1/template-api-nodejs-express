let contatos = [];

function listarContatos() {
    return contatos;
}

function criarContato(nome, telefone) {
    const novoContato = { id: contatos.length + 1, nome, telefone };
    contatos.push(novoContato);

    return novoContato;
}

module.exports = { 
    listarContatos,
     criarContato 
    };