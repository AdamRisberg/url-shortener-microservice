var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.send("/ INDEX ROUTE");
});

app.get("/new/:url", function(req, res) {
  res.send("/new/:url SHORTEN URL ROUTE");
});

app.listen(port, function() {
  console.log("App listening on port: " + port);
});