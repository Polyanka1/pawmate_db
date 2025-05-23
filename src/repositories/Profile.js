const { Profile, ForumPost, Service, Pet } = require('../models/initModels');


class ProfileRepository {
  async create(profile) {
    return await Profile.create(profile);
  }

  async read(id) {
    return await Profile.findByPk(id, {
      include: [
        {
          model: ForumPost,
          as: "posts",
        },
        {
          model: Service,
          as: "services",
        },
        {
          model: Pet,
          as: "pets",
        },
      ],
    }    
  );
  }

  async update(id, profileData) {
    return await Profile.update(profileData, { where: { id } });
  }

  async delete(id) {
    return await Profile.destroy({ where: { id } });
  }
}

module.exports = new ProfileRepository();
