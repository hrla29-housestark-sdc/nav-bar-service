const psql = require('express').Router();
const controller = require('./controller.js');

psql.route('/search/:query').get(controller.postgresGetProduct);
psql.route('/search').post(controller.postSearch);

module.exports = psql;
