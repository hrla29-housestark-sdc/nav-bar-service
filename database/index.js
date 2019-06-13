const mongoose = require('mongoose');

mongoose
  .connect('mongodb://mongo:27017/navigation', { useNewUrlParser: true })
  .then(() => console.log('Connection to mongoDB is successful!'))
  .catch(err => console.log(err));

//mongodb://localhost/navigation
