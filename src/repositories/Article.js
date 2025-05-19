const Article = require("../models/Article");

class ArticleRepository {
  async read(id) {
    return await Article.findByPk(id);
  }

  async list() {
    return await Article.findAll();
  }
}

module.exports = new ArticleRepository();
