const express = require('express');
const productsController = require('../controllers/productsController');

const productsRoutes = express.Router();

// productsRoutes.get('/:id', (req, res) => res.status(200).send('tudo ok'));

productsRoutes.get('/', productsController.getAll);

module.exports = productsRoutes;