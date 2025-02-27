// require('newrelic');
const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const mongo = require('./router');
// const psql = require('./Postgres/router.js');

let app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.use('/navbar/mongo', mongo);
// app.use('/navbar/psql', psql);

// serving static client front-end files
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// app.use(express.static(path.resolve(__dirname, '../Loader')));

// establish port to listen on
let port = 3001;
app.listen(port, () =>
  console.log(`Navbar-server is listening on port ${port}`)
);
