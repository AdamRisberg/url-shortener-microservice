var ShortUrl = require("./model");
var validUrl = require("valid-url");

function checkUrl(req, res, next) {
  if(validUrl.isUri(req.params[0])) {
    ShortUrl.findOne({ original_url: req.params[0] })
      .then(function(shortUrl) {
        if(shortUrl) req.shortUrl = shortUrl;
        next();
      });
  } else {
    res.json({ error: "Wrong URL format. Be sure to use the full address, for example: http://www.example.com" });
  }
}

function newUrl(req, res) {
  if(req.shortUrl) return res.json(req.shortUrl.toJSON());

  ShortUrl.findOne({})
    .sort("-short_url")
    .exec()
    .then(function(lastUrl) {
      var shortUrl = {
        original_url: req.params[0],
        short_url: lastUrl ? lastUrl.short_url + 1 : 1
      };

      ShortUrl.create(shortUrl)
        .then(function(url) {
          res.json(url.toJSON());
        });
    });
}

function redirect(req, res) {
  // TODO
  // Look up short url in database. If not found, return error object.

  res.send("/:url REDIRECT ROUTE");
}

function getHomepage(req, res) {
  res.send("/ INDEX ROUTE");
}

module.exports = { checkUrl, newUrl, redirect, getHomepage };