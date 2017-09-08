var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var savedArticleSchema = new Schema({
  title: String,
});

var savedArticle = mongoose.model("savedArticle", savedArticleSchema);

module.exports = savedArticle;