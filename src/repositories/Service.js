const Service = require("../models/Service");

class ServiceRepository {
  async create(service) {
    return await Service.create(service);
  }

  async read(id) {
    return await Service.findByPk(id);
  }

  async update(id, serviceData) {
    return await Service.update(serviceData, { where: { id } });
  }

  async delete(id) {
    return await Service.destroy({ where: { id } });
  }

  async list() {
    return await Service.findAll({
        order: [["created_at", "DESC"]],
    });
  }

  async getServiceByName(title) {
    return await Service.findAll({
      where: {
        title: {
          [require('sequelize').Op.iLike]: `%${title}%`, // поиск без учёта регистра
        },
      },
    });
  }
}

module.exports = new ServiceRepository();
