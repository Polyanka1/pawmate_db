const mapPet = pet => ({
  id: pet.id,
  petUserId: pet.user_id,
  photo: pet.photo,
  name: pet.name,
  type: pet.type,
  breed: pet.breed,
  age: pet.age,
  weight: parseFloat(pet.weight),
  description: pet.description,
});

module.exports = mapPet;
