const express = require('express');

const salesRoutes = express.Router();

salesRoutes.get('/', (req, res) => res.status(200).send('ok'));

salesRoutes.get('/:id', (req, res) => res.status(200).send('oks'));

module.exports = salesRoutes;