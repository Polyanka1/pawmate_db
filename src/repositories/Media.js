const Media = require("../models/Media");

class MediaRepository {
  async create(media) {
    return await Media.create(media);
  }

  async read(id) {
    return await Media.findByPk(id);
  }

  async delete(id) {
    return await Media.destroy({ where: { id } });
  }
}

module.exports = new MediaRepository();
