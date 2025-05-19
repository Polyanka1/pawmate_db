const ProfileRepository = require("../repositories/Profile");

class ProfileService {
  async createProfile(profileData) {
    return await ProfileRepository.create(profileData);
  }

  async getProfileById(id) {
    return await ProfileRepository.read(id);
  }

  async updateProfile(id, profileData) {
    await ProfileRepository.update(id, profileData);
  }

  async deleteProfile(id) {
    await ProfileRepository.delete(id);
  }
}

module.exports = new ProfileService();
