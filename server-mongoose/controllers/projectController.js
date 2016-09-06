const Project = require('../models/project-model');

function newproj(req, res, next){
  Project.create(req.query, err=>{
    if (err) throw err;
  });
  next();
}

function index(req, res) {
	Project.find(req.query).then(function(result){
		res.json(result);
	}).catch(function(err){
		console.log(err);
	})
}

function show(req, res) {
	
	Project.findOne(req.params).then(function(result){
		if (result === null){
			res.sendStatus(404);
		}
		res.json(result);
	}).catch(function(err){
		console.log(err);
	})
}

module.exports = { index, show, newproj};
