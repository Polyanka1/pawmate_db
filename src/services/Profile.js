const ProfileRepository = require("../repositories/Profile");
const fs = require("fs");
const path = require("path");
const Profile = require("../models/Profile");
const DbLog = require("../models/DbLog");

class ProfileService {
  async createProfile(profileData) {
    return await ProfileRepository.create(profileData);
  }

  async getProfileById(id) {
    return await ProfileRepository.read(id);
  }

  async updateProfile(id, updateData, photoPath) {
    const profile = await Profile.findByPk(id);

    if (!profile) throw new Error("Профиль не найден");

    // Удалить старое фото, если новое загружено
    if (photoPath && profile.photo && fs.existsSync(profile.photo)) {
      fs.unlinkSync(profile.photo);
    }

    if (photoPath) updateData.photo = photoPath;

    await profile.update(updateData);

    await DbLog.create({
      operation: "update",
      entity: "Profile",
      data: { id, ...updateData },
    });
  }

  async deleteProfile(id) {
  
    const profile = await Profile.findByPk(id);
    if (!profile) throw new Error("Профиль не найден");

    if (profile.photo && fs.existsSync(profile.photo)) {
      fs.unlinkSync(profile.photo);
    }

    await ProfileRepository.delete(id);

    await DbLog.create({
      operation: "delete",
      entity: "Profile",
      data: { id },
    });
  }
}

module.exports = new ProfileService();
