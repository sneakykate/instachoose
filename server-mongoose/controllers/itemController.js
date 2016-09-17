const Item = require('../models/item-model');

function newitem(req, res, next){
  Item.create(req.body, () => {
  }, err => {
    if (err) throw err;
  });
  next();
}

function index(req, res) {
	Item.find(req.query).then(function(result){
		res.json(result);
	}).catch(function(err){
		console.log(err);
	});
}

function show(req, res) {
	
	Item.findOne(req.params).then(function(result){
		if (result === null) {
			res.sendStatus(404);
		}
		res.json(result);
	}).catch(function(err) {
		console.log(err);
	});
}

module.exports = { index, show, newitem};
