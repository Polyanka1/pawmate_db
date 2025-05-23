const ServiceService = require("../services/Service");

class ServiceController {
  async createService(req, res) {
    try {
      const service = await ServiceService.createService(req.body);
      res.status(201).json(service);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getServiceById(req, res) {
    try {
      const service = await ServiceService.getServiceById(req.params.id);
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getServiceByName(req, res) {
    try {
      const services = await ServiceService.getServiceByName(req.query.title);
      res.status(200).json(services);
    } catch (error) {
      if (error.message === 'Услуги не найдены') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async updateService(req, res) {
    try {
      await ServiceService.updateService(req.params.id, req.body);
      res.status(200).json({ message: "Service updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteService(req, res) {
    try {
      await ServiceService.deleteService(req.params.id);
      res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllServices(req, res) {
    try {
      const services = await ServiceService.getAllServices();
      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ServiceController();
