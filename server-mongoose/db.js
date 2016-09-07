const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongodb-orm');
mongoose.connection.once('open', () => {
  console.log('connected with mongodb orm');
});
mongoose.Promise = require('bluebird');

module.exports = mongoose;