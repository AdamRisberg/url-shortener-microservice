var express = require("express");
var routes = require("./short_url/routes");
var mongoose = require("mongoose");
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/url_shortener");

app.use(express.static("./Public"));

app.use("/", routes);

module.exports = app;