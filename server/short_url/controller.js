var ShortUrl = require("./model");
var validUrl = require("valid-url");

function checkUrl(req, res, next) {
  if(validUrl.isUri(req.params[0])) {
    ShortUrl.findOne({ original_url: req.params[0] })
      .then(function(shortUrl) {
        if(shortUrl) req.shortUrl = shortUrl;
        next();
      })
      .catch(function(err) {
        next(err);
      });
  } else {
    res.json({ error: "Wrong URL format. Be sure to use the full address, for example: http://www.example.com" });
  }
}

function newUrl(req, res, next) {
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
        })
        .catch(function(err) {
          next(err);
        });
    })
    .catch(function(err) {
      next(err);
    });
}

function redirect(req, res, next) {
  ShortUrl.findOne({ short_url: req.params.url })
    .then(function(url) {
      if(url) return res.redirect(url.original_url);

      res.json({ error: "URL not found." });
    })
    .catch(function(err) {
      next(err);
    });
}

module.exports = { checkUrl, newUrl, redirect };