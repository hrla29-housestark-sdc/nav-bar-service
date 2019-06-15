const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://ec2-54-183-175-81.us-west-1.compute.amazonaws.com:27017/navigation',
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log('Connection to mongoDB is successful!'))
  .catch(err => console.log(err));
