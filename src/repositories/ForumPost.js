const ForumPost = require("../models/ForumPost");

class ForumPostRepository {
  async create(post) {
    return await ForumPost.create(post);
  }

  async read(id) {
    return await ForumPost.findByPk(id);
  }

  async update(id, postData) {
    return await ForumPost.update(postData, { where: { id } });
  }

  async delete(id) {
    return await ForumPost.destroy({ where: { id } });
  }

  async list() {
    return await ForumPost.findAll();
  }
}

module.exports = new ForumPostRepository();
