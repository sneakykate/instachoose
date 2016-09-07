const mongoose = require('../db.js');
const Schema = mongoose.Schema;
const Item = require('./item-model');
// mongoose.connect('mongodb://localhost/mongodb-orm');
// mongoose.connection.once('open', () => {
//   console.log('connected with mongodb orm');
// });
// mongoose.Promise = require('bluebird');

const projectSchema = new Schema({
  // define schema here
  id: String,
  projname: { type: String, required: true },
	htmlLink: String,
	sequence: Number,
	created: Date,
	due: Date,
	start: Date,
	end: Date,
  rating: Number,
  chosen: Boolean,
  projItems: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
