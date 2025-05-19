const Profile = require("../models/Profile");

class ProfileRepository {
  async create(profile) {
    return await Profile.create(profile);
  }

  async read(id) {
    return await Profile.findByPk(id);
  }

  async update(id, profileData) {
    return await Profile.update(profileData, { where: { id } });
  }

  async delete(id) {
    return await Profile.destroy({ where: { id } });
  }
}

module.exports = new ProfileRepository();
