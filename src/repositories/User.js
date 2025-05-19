const User = require("../models/User");

class UserRepository {
  async create(user) {
    return await User.create(user);
  }

  async read(id) {
    return await User.findByPk(id);
  }

  async update(id, userData) {
    return await User.update(userData, { where: { id } });
  }

  async delete(id) {
    return await User.destroy({ where: { id } });
  }

  async list() {
    return await User.findAll();
  }
}

module.exports = new UserRepository();
