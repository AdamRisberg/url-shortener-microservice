var short_url = require("./model");

function newUrl(req, res) {
  res.send("/new/:url SHORTEN URL ROUTE");
}

function redirect(req, res) {
  res.send("/:url REDIRECT ROUTE");
}

function getHomepage(req, res) {
  res.send("/ INDEX ROUTE");
}

module.exports = { newUrl, redirect, getHomepage };