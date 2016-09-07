const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// db = mongoose.createConnection('mongodb://localhost/mongodb-orm');
// db.connection.once('open', () => {
//   console.log('connected with mongodb orm');
// });
// db.Promise = require('bluebird');

const itemSchema = new Schema({
  // define schema here
  id: String,
  itemName: { type: String, required: true },
	htmlLink: String,
	price: Number,
	created: Date,
	due: Date,
	start: Date,
	end: Date,
  rating: Number,
  chosen: Boolean
});


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;