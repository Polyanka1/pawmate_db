const AddressRepository = require("../repositories/Address");

class AddressService {
  async createAddress(addressData) {
    return await AddressRepository.create(addressData);
  }

  async getAddressById(id) {
    return await AddressRepository.read(id);
  }

  async updateAddress(id, addressData) {
    await AddressRepository.update(id, addressData);
  }

  async deleteAddress(id) {
    await AddressRepository.delete(id);
  }
}

module.exports = new AddressService();
