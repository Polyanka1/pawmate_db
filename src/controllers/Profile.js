const ProfileService = require("../services/Profile");
const fs = require("fs");
const path = require("path");

class ProfileController {
  async createProfile(req, res) {
    try {
      const photoPath = req.file ? req.file.path : null;

      const profileData = {
        ...req.body,
        user_id: req.user.id,
        photo: photoPath, // путь сохраняется в БД
      };

      const profile = await ProfileService.createProfile(profileData);
      res.status(201).json(profile);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProfileById(req, res) {
    try {
      const profile = await ProfileService.getProfileById(req.params.id);
      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProfile(req, res) {
    try {
      const photoPath = req.file ? req.file.path : null;
      await ProfileService.updateProfile(req.params.id, req.body, photoPath);
      res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProfile(req, res) {
    try {
      await ProfileService.deleteProfile(req.params.id);
      res.status(200).json({ message: "Profile deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProfileController();
