const ForumPostService = require("../services/ForumPost");

class ForumPostController {
  async createPost(req, res) {
    try {
      const post = await ForumPostService.createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPostById(req, res) {
    try {
      const post = await ForumPostService.getPostById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePost(req, res) {
    try {
      await ForumPostService.updatePost(req.params.id, req.body);
      res.status(200).json({ message: "Post updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePost(req, res) {
    try {
      await ForumPostService.deletePost(req.params.id);
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await ForumPostService.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // async getCommentsByPostId(req, res) {
  //   try {
  //     const comments = await ForumPostService.getCommentsByPostId(req.params.id);
  //     res.status(200).json(comments);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }
}

module.exports = new ForumPostController();
