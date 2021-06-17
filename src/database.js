const mongoose = require('mongoose');

URI = 'mongodb://localhost/crud';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log('Database connected'))
  .catch((error) => console.log(error));

module.exports = mongoose;
