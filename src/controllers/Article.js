const ArticleService = require("../services/Article");

class ArticleController {
  async getArticleById(req, res) {
    try {
      const article = await ArticleService.getArticleById(req.params.id);
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllArticles(req, res) {
    try {
      const articles = await ArticleService.getAllArticles();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ArticleController();
