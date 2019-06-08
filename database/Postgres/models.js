// ******* SEQUELIZE / POSTGRES **********************
const Sequelize = require('sequelize');
const connection = require('./index.js');

const NavBar = connection.define(
  'nav',
  {
    keyword: Sequelize.STRING,
    images: Sequelize.STRING
  },
  {
    timestamps: false
  }
);

connection
  .sync()
  .then(() => console.log('Synced with MySQL database'))
  .catch(error => console.error(error));
module.exports = NavBar;