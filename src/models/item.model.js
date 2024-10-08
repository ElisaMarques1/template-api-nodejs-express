let items = [];  // Cria uma lista vazia para armazenar os itens (simulando um banco de dados)

// Função que retorna todos os itens armazenados
function listItems() {
  return items;  // Retorna a lista de itens
};

// Função que cria um novo item e o adiciona à lista
function createItem(name) {
  const newItem = { id: items.length + 1, name };  // Cria um novo item com ID incremental e o nome fornecido
  items.push(newItem);  // Adiciona o novo item à lista

  return newItem;  // Retorna o item recém-criado
};


module.exports = {
  listItems,
  createItem,
}
