var express = require("express");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/" + PORT);

// Routes


// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  