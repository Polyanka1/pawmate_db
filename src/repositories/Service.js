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
    return await Service.findAll();
  }
}

module.exports = new ServiceRepository();
