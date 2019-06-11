const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/navigation', { useNewUrlParser: true })
  .then(() => console.log('Connection to mongoDB is successful!'))
  .catch(err => console.log(err));
