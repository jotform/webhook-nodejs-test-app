var port = 80;

var bodyParser = require('body-parser');
var express = require('express');
var multer  = require('multer')

var app = express();
var multipart = multer()

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/webhook', multipart.array(), function(req, res) {
  console.log(req.body)
  res.send(req.body);
});

app.listen(port);
console.log('Server started! URL: http://localhost:' + port);
