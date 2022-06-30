const express = require('express');

const productsRoutes = express.Router();

productsRoutes.get('/', (req, res) => res.status(200).send('ok'));

productsRoutes.get('/:id', (req, res) => res.status(200).send('ok'));

module.exports = productsRoutes;