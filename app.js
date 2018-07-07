// Importing required modules for Node

var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');

// express instance creation

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, function() {
  console.log('now it is working....');
});