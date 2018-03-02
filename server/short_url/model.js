var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ShortUrlSchema = new Schema({
  original_url: {
    type: String,
    required: true,
    unique: true
  },
  short_url: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("short_url", ShortUrlSchema);