const Project = require('../models/project-model');

function newproj(req, res, next){
	console.log("newproj called");
  Project.create(req.body, err => {
    if (err) console.error(err);
  });
  next();
}
//put requests from Postman working
function update(req, res, next){
	console.log("update called");
	console.log(req.body);
  Project.findById(req.body[0]._id, function(err, proj){
		if(err) console.error(err);
		proj.chosen = req.body[0].chosen;
		proj.save(function(err, updatedProj){
			if(err) console.error(err);
		});
	});

  next();
}

function index(req, res) {
	Project.find(req.query).then(function(result){
		res.json(result);
	}).catch(function(err){
		console.log(err);
	});
}

function show(req, res) {
	
	Project.findOne(req.params).then(function(result){
		if (result === null) {
			res.sendStatus(404);
		}
		res.json(result);
	}).catch(function(err) {
		console.log(err);
	});
}

module.exports = { index, show, newproj, update};
