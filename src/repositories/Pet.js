const Pet = require("../models/Pet");

class PetRepository {
  async create(pet) {
    return await Pet.create(pet);
  }

  async read(id) {
    return await Pet.findByPk(id);
  }

  async update(id, petData) {
    return await Pet.update(petData, { where: { id } });
  }

  async delete(id) {
    return await Pet.destroy({ where: { id } });
  }
}

module.exports = new PetRepository();
