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

  async getCommentsByPostId(postId) {
      return await CommentRepository.getCommentsByPostId(postId);
    }
}

module.exports = new CommentService();
