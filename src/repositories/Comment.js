const Comment = require("../models/Comment");

class CommentRepository {
  async create(comment) {
    return await Comment.create(comment);
  }

  async read(id) {
    return await Comment.findByPk(id);
  }

  async update(id, commentData) {
    return await Comment.update(commentData, { where: { id } });
  }

  async delete(id) {
    return await Comment.destroy({ where: { id } });
  }
}

module.exports = new CommentRepository();
