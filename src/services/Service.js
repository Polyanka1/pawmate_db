const ServiceRepository = require("../repositories/Service");

class ServiceService {
  async createService(serviceData) {
    return await ServiceRepository.create(serviceData);
  }

  async getServiceById(id) {
    return await ServiceRepository.read(id);
  }

  async updateService(id, serviceData) {
    await ServiceRepository.update(id, serviceData);
  }

  async deleteService(id) {
    await ServiceRepository.delete(id);
  }

  async getAllServices() {
    return await ServiceRepository.list();
  }
}

module.exports = new ServiceService();
