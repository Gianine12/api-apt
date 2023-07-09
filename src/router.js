const express = require('express');

const routes = express.Router();

const VisitanteController = require('./Controller/VisitanteController');

routes.post('/visitante', VisitanteController.createVisitante);
routes.get('/visitantes', VisitanteController.getVisitante);

module.exports = routes;
