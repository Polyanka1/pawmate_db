const MediaService = require("../services/Media");

class MediaController {
  async addMedia(req, res) {
    try {
      const media = await MediaService.addMedia(req.body);
      res.status(201).json(media);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMediaById(req, res) {
    try {
      const media = await MediaService.getMediaById(req.params.id);
      res.status(200).json(media);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteMedia(req, res) {
    try {
      await MediaService.deleteMedia(req.params.id);
      res.status(200).json({ message: "Media deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MediaController();
