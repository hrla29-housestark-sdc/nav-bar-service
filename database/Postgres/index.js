// **************** POSTGRES ***************************
const Sequelize = require('sequelize');
const mysql = require('mysql2');

const connection = new Sequelize('navigation', 'Steven', '', {
  host: 'localhost',
  dialect: 'postgres'
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection established');
  })
  .catch(err => {
    console.log('Unable to connect', err);
  });

module.exports = connection;
