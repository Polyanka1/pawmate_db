const {Profile, Comment} = require('../models/initModels')

class CommentRepository {
  async create(comment) {
    return await Comment.create(comment);
  }

  async read(id) {
    return await Comment.findByPk(id, {
      include: [
      {
        model: Profile,
        as: "profile",
      },
    ],
  });
  }

  async update(id, commentData) {
    return await Comment.update(commentData, { where: { id } });
  }

  async delete(id) {
    return await Comment.destroy({ where: { id } });
  }

  async getCommentsByPostId(postId) {
    return await Comment.findAll({
      where: { post_id: postId },
      // order: [["createdAt", "ASC"]],
    });
  }
}

module.exports = new CommentRepository();
