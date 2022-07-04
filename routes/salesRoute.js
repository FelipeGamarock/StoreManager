const express = require('express');
const salesController = require('../controllers/salesController');

const salesRoutes = express.Router();

salesRoutes.get('/', salesController.getAll);

salesRoutes.get('/:id', salesController.getById);

module.exports = salesRoutes;