const AddressService = require("../services/Address");

class AddressController {
  async createAddress(req, res) {
    try {
      const address = await AddressService.createAddress(req.body);
      res.status(201).json(address);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAddressById(req, res) {
    try {
      const address = await AddressService.getAddressById(req.params.id);
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAddress(req, res) {
    try {
      await AddressService.updateAddress(req.params.id, req.body);
      res.status(200).json({ message: "Address updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteAddress(req, res) {
    try {
      await AddressService.deleteAddress(req.params.id);
      res.status(200).json({ message: "Address deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AddressController();
