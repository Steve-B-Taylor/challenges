import Cage from "./Cage";

class Zoo {
  constructor(name) {
    this.name = name;
    this.cages = [];
    this.employees = [];
    for (let i = 0; i < 10; i++) {
      this.cages.push(new Cage());
    }
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  addAnimal(animal) {
    let emptyCage = this.cages.findIndex((cage) => {
      return cage.animal === null;
    });
    if (emptyCage === -1) {
      return "All of the cages are full!";
    } else {
      this.cages[emptyCage].animal = animal;
    }
  }
  visit() {
    let visitGreeting = "";
    this.cages.forEach((cage) => {
      if (cage.animal) {
        visitGreeting += `${cage.animal.speak()}\n`;
      }
    });
    this.employees.forEach((employee) => {
      visitGreeting += `${employee.greet()}\n`;
    });
    return visitGreeting;
  }
}

export default Zoo;
