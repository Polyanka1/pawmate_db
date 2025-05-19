const CommentRepository = require("../repositories/Comment");

class CommentService {
  async createComment(commentData) {
    return await CommentRepository.create(commentData);
  }

  async getCommentById(id) {
    return await CommentRepository.read(id);
  }

  async updateComment(id, commentData) {
    await CommentRepository.update(id, commentData);
  }

  async deleteComment(id) {
    await CommentRepository.delete(id);
  }
}

module.exports = new CommentService();
