const psql = require('express').Router();
const controller = require('./controller.js');

psql.route('/search/:query').get(controller.postgresGetProduct);
psql.route('/search').post(controller.postSearch);
psql.route('/random').get(controller.random);

module.exports = psql;
