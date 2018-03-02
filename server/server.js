var express = require("express");
var routes = require("./short_url/routes");
var mongoose = require("mongoose");
var app = express();
var databaseUrl = process.env.DATABASEURL || "mongodb://localhost/url_shortener";

mongoose.Promise = Promise;
mongoose.connect(databaseUrl)
  .catch(function(err) {
    console.log(err.message);
  });

app.use(express.static("./Public"));
app.use("/", routes);

app.use(function(err, req, res, next) {
  res.status(500).send("Something went wrong");
});

module.exports = app;