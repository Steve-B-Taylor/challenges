import "../creatures.js";

class MagicalCreature {
  constructor(info) {
    this.name = info.name;
    this.magicAbility = info.ability;
    this.age = info.age;
  }
  isAncient() {
    if (this.age > 200 || null) {
      return true;
    } else {
      return false;
    }
  }
  static findAll(info) {
    let retArray = info.map((creature) => {
      return new MagicalCreature(creature.name, creature.info, creature.age);
    });
    return retArray;
  }
  // findAll(info) {
  //   info.forEach((creature) => {
  //     let critterObj = {
  //       name: creature.name,
  //       ability: creature.ability,
  //       age: creature.age,
  //     };
  //     console.log(critterObj);
  //     return critterObj;
  //   });
  // }
}

export default MagicalCreature;
