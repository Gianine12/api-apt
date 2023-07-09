require('dotenv').config();

const { Sequelize } = require('sequelize');

const dbConfig = require('../config/database');

const Visitante = require('./model/Visitante');

const connection = new Sequelize(dbConfig);

Visitante.init(connection);

module.exports = connection;
