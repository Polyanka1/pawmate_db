const ForumPostRepository = require("../repositories/ForumPost");

class ForumPostService {
  async createPost(postData) {
    return await ForumPostRepository.create(postData);
  }

  async getPostById(id) {
    return await ForumPostRepository.read(id);
  }

  async updatePost(id, postData) {
    await ForumPostRepository.update(id, postData);
  }

  async deletePost(id) {
    await ForumPostRepository.delete(id);
  }

  async getAllPosts() {
    return await ForumPostRepository.list();
  }
}

module.exports = new ForumPostService();
