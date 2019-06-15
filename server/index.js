const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const mongo = require('./router');
const psql = require('./Postgres/router.js');

let app = express();

// middleware
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.use('/navbar/mongo', mongo);
// app.use('/navbar/psql', psql);

// serving static client front-end files
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use('/loaderio-89015195599096ff0adc825f104bf6e2', (req, res) => {
  res.status(200).send('loaderio-89015195599096ff0adc825f104bf6e2');
});

// establish port to listen on
let port = 3001;
app.listen(port, () =>
  console.log(`Navbar-server is listening on port ${port}`)
);
