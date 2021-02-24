class Owner {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.pets = [];
  }
  addPet(pet) {
    this.pets.push(pet);
  }
  callPets() {
    let summons = "";
    this.pets.forEach((pet) => {
      summons += `Here, ${pet.name}!`;
    });
    return summons;
  }
}

export default Owner;
