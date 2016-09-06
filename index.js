var express = require('express');
var app = express();
var path = require('path');
var projectCtrl = require('./server-mongoose/controllers/projectController.js');

app.use(express.static(__dirname)); // serves the index.html

app.get('/api', projectCtrl.index);

app.post('/add', projectCtrl.newproj, (req, res) => { res.redirect('/'); });



app.listen(3000, () => {
  console.log('Server listening on port 3000');
}); // listens on port 3000 -> http://localhost:3000/
