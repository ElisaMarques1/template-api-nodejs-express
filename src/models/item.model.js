//importando o pool de conexões com o banco de dados
const pool = require('../config/database');


// Função que retorna todos os itens armazenados
async function listItems() {
  //retorna a lista de itens
  const buscarItems = await pool.query('SELECT * FROM items');

  return buscarItems[0];
};

// Função que cria um novo item e o adiciona à lista
async function createItem(name) {
  //adiciona um novo item a lista
  const newItem = await pool.query(`INSERT INTO items (name) VALUES ('${name}')`); {

    return newItem[0];
  }     	
};


module.exports = {
  listItems,
  createItem
}
