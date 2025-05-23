const { Profile, ForumPost } = require('../models/initModels');


class ForumPostRepository {
  async create(post) {
    return await ForumPost.create(post);
  }

  async read(id) {

    return await ForumPost.findByPk(id, {
          include: [
          {
            model: Profile,
            as: "profile",
          },
        ],
      }
    );
  }

  async update(id, postData) {
    return await ForumPost.update(postData, { where: { id } });
  }

  async delete(id) {
    return await ForumPost.destroy({ where: { id } });
  }

  async list() {
    return await ForumPost.findAll({
           order: [["created_at", "DESC"]],
        });
  }

  // async getCommentsByPostId(postId) {
  //   return await Comment.findAll({
  //     where: { post_id: postId },
  //     order: [["createdAt", "ASC"]],
  //   });
  // }
}

module.exports = new ForumPostRepository();
