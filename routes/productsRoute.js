const express = require('express');
const productsController = require('../controllers/productsController');

const productsRoutes = express.Router();

productsRoutes.get('/:id', productsController.getById);

productsRoutes.get('/', productsController.getAll);

productsRoutes.post('/', productsController.add);

module.exports = productsRoutes;