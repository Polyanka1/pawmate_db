const Address = require("../models/Address");

class AddressRepository {
  async create(address) {
    return await Address.create(address);
  }

  async read(id) {
    return await Address.findByPk(id);
  }

  async update(id, addressData) {
    return await Address.update(addressData, { where: { id } });
  }

  async delete(id) {
    return await Address.destroy({ where: { id } });
  }
}

module.exports = new AddressRepository();
