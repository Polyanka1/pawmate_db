const ForumPostRepository = require("../repositories/ForumPost");
const CommentService = require("../services/Comment");


class ForumPostService {
  async createPost(postData) {
    return await ForumPostRepository.create(postData);
  }

  async getPostById(id) {
    const comments = await CommentService.getCommentsByPostId(id)
    const post = await ForumPostRepository.read(id);

    return post;
    // return {
    //   post: {...post.get(), first_name: post.Profile.first_name, last_name: post.Profile.last_name},
    //   comments
    // }
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

  // async getCommentsByPostId(postId) {
  //   return await ForumPostRepository.getCommentsByPostId(postId);
  // }
}

module.exports = new ForumPostService();
