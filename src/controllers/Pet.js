const PetService = require("../services/Pet");

class PetController {
  async createPet(req, res) {
    try {
      const photoPath = req.file ? req.file.path : null;
      
      const petData = {
        ...req.body,
        photo: photoPath, 
      };

      const pet = await PetService.createPet(petData);
      res.status(201).json(pet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPetById(req, res) {
    try {
      const pet = await PetService.getPetById(req.params.id);
      res.status(200).json(pet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePet(req, res) {
    try {
      await PetService.updatePet(req.params.id, req.body);
      res.status(200).json({ message: "Pet updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePet(req, res) {
    try {
      await PetService.deletePet(req.params.id);
      res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PetController();
