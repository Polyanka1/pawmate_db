const ArticleRepository = require("../repositories/Article");

class ArticleService {
  async getArticleById(id) {
    return await ArticleRepository.read(id);
  }

  async getAllArticles() {
    return await ArticleRepository.list();
  }
}

module.exports = new ArticleService();
