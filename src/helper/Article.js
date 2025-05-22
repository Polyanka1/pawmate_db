const { format } = require('date-fns');

const mapArticle = article => ({
  id: article.id,
  title: article.title,
  content: article.content,
  photo: pet.photo,
});

module.exports = mapArticle;
