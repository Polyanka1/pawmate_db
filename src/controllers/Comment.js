const CommentService = require("../services/Comment");

class CommentController {
  async createComment(req, res) {
    try {
      const comment = await CommentService.createComment(req.body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCommentById(req, res) {
    try {
      const comment = await CommentService.getCommentById(req.params.id);
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateComment(req, res) {
    try {
      await CommentService.updateComment(req.params.id, req.body);
      res.status(200).json({ message: "Comment updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteComment(req, res) {
    try {
      await CommentService.deleteComment(req.params.id);
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CommentController();
