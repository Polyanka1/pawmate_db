const express = require("express");
const ArticleController = require("../controllers/Article");

const router = express.Router();

router.get("/", 
    ArticleController.getAllArticles);

router.get("/:id", 
    ArticleController.getArticleById);

module.exports = router;
