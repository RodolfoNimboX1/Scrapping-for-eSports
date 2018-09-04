var express = require("express");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
// Initialize Express
var app = express();
var router = express.Router();

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Use Handlebars
app.engine("handlebars", handlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));

// Every request goes thru router
app.use(router);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Routes
require("./config/routes")(router);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  