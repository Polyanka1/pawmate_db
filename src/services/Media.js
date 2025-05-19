const MediaRepository = require("../repositories/Media");

class MediaService {
  async createMedia(mediaData) {
    return await MediaRepository.create(mediaData);
  }

  async getMediaById(id) {
    return await MediaRepository.read(id);
  }

  async deleteMedia(id) {
    await MediaRepository.delete(id);
  }
}

module.exports = new MediaService();
