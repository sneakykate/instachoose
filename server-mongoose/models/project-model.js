const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongodb-orm');
mongoose.Promise = require('bluebird');

const projectSchema = new Schema({
  // define schema here
  id: String,
  projname: String,
	htmlLink: String,
	sequence: Number,
	created: Date,
	updated: Date,
	start: Date,
	end: Date
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
