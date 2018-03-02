var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ShortUrlSchema = new Schema({
  original_url: {
    type: String,
    required: true,
    unique: true
  },
  short_url: {
    type: Number,
    required: true,
    unique: true
  }
});

ShortUrlSchema.methods = {
  toJSON: function() {
    var obj = this.toObject();
    delete obj._id;
    delete obj.__v;
    return obj;
  }
};

module.exports = mongoose.model("short_url", ShortUrlSchema);