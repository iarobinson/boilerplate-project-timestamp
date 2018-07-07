// Importing required modules for Node
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var moment = require("moment");
var http = require('http');

// express instance creation
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// functionality goes here
app.get("/api/timestamp/:date_string?", function(req, res, next) {
  
  // Receives data from user if user specifices
  let userInput = req.params.date_string;
  console.log(isNaN(userInput));
  // Formats the UTC feedback
  let dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  
  // Asks is the user input is a 
  if (isNaN(userInput)) {
    var naturalDate = new Date(userInput);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormat);
    var unixDate = new Date(userInput).getTime() / 1000
  } else {
    var unixDate = userInput;
    var naturalDate = new Date(userInput * 1000);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormat);
  }
  
  res.json({
    unix: unixDate,
    natural: naturalDate
  });
});

// Set the server to listen for functions on 3000 port
app.listen(process.env.PORT || 3000, function() {
  console.log("server is functioning");
});