var express = require('express');
var app = express();
var path = require('path');
var projectCtrl = require('./server-mongoose/controllers/projectController.js');
var bodyParser = require('body-parser');

app.use(express.static(__dirname)); // serves the index.html
app.use(bodyParser.json());


app.get('/api', projectCtrl.index);

app.post('/add', projectCtrl.newproj, (req, res) => { res.end(); });

app.put('/choose', projectCtrl.update, (req, res) => { res.end(); });

//do a default route
 
app.listen(3000, () => {
  console.log('Server listening on port 3000');
}); // listens on port 3000 -> http://localhost:3000/
