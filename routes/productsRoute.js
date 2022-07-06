const express = require('express');
const productsController = require('../controllers/productsController');

const productsRoutes = express.Router();

productsRoutes.post('/', productsController.add);

productsRoutes.get('/:id', productsController.getById);

productsRoutes.delete('/:id', productsController.remove);

productsRoutes.put('/:id', productsController.edit);

productsRoutes.get('/', productsController.getAll);

module.exports = productsRoutes;