// Importing required modules for Node
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var moment = require("moment");

// express instance creation
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// functionality goes here
app.get('/dateValues/:dateVal', function(req, res, next) {
  var dateVal = req.params.dateVal;
  res.json({ unix: dateVal });
});

// Set the server to listen for functions on 3000 port
app.listen(3000, function() {
  let time = moment().format('dddd');
  console.log(time, "<-time");
});