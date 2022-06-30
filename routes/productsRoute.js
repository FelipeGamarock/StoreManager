const express = require('express');

const productsRoutes = express.Router();

productsRoutes.get('/:id', (req, res) => res.status(200).send('tudo ok'));

productsRoutes.get('/', (req, res) => res.status(200).send('ok'));

module.exports = productsRoutes;