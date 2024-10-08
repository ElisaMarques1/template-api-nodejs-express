const itemModel = require('../models/item.model');  // Importa o modelo de itens





// Controlador para a rota GET, que retorna todos os itens
function getItems(req, res) {
  const items = itemModel.listItems();  // Obtém todos os itens diretamente do modelo
  res.json(items);  // Retorna os itens no formato JSON
};

// Controlador para a rota POST, que cria um novo item
function createItem(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const newItem = itemModel.createItem(name);
  res.status(201).json(newItem);
}


module.exports = {
  getItems,
  createItem,
}
