var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var savedArticleSchema = new Schema({
  text: String,
  date: Number,
    type: year,
    default: false

});

var savedArticle = mongoose.model("savedArticle", savedArticleSchema);

module.exports = savedArticle;