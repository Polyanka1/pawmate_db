const PetRepository = require("../repositories/Pet");

class PetService {
  async createPet(petData) {
    return await PetRepository.create(petData);
  }

  async getPetById(id) {
    return await PetRepository.read(id);
  }

  async updatePet(id, petData) {
    await PetRepository.update(id, petData);
  }

  async deletePet(id) {
    await PetRepository.delete(id);
  }
}

module.exports = new PetService();
