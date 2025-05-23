const PetRepository = require("../repositories/Pet");
const fs = require("fs");
const path = require("path");
const Pet = require("../models/Pet");
const DbLog = require("../models/DbLog");


class PetService {
  async createPet(petData) {
    return await PetRepository.create(petData);
  }

  async getPetById(id) {
    return await PetRepository.read(id);
  }

  async updatePet(id, updateData, photoPath) {
    const pet = await Pet.findByPk(id);
    
        if (!pet) throw new Error("Пиомец не найден");
    
        if (photoPath && pet.photo && fs.existsSync(pet.photo)) {
          fs.unlinkSync(pet.photo);
        }
    
        if (photoPath) updateData.photo = photoPath;
    
        await pet.update(updateData);
    
        await DbLog.create({
          operation: "update",
          entity: "Pet",
          data: { id, ...updateData },
        });
  }

  async deletePet(id) {
    const pet = await Pet.findByPk(id);
    if (!pet) throw new Error("Питомец не найден");

    if (pet.photo && fs.existsSync(pet.photo)) {
      fs.unlinkSync(pet.photo);
    }

    await PetRepository.delete(id);

    await DbLog.create({
      operation: "delete",
      entity: "Pet",
      data: { id },
    });
  }
}

module.exports = new PetService();
