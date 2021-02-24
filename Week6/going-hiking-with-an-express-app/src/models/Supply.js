import fs from "fs";

const suppliesPath = "supplies.json";

class Supply {
  constructor({ name }) {
    this.name = name;
  }

  static findAll() {
    const suppliesData = JSON.parse(fs.readFileSync(suppliesPath)).supplies;
    const supplies = suppliesData.map((supply) => {
      return new Supply(supply);
    });
    return supplies;
  }

  static getNextSupplyId() {
    const maxSupply = (this.findAll(), (supply) => supply.id).length;
    return maxSupply;
  }

  save() {
    const itemCheck = this.name.trim();
    // console.log(`Debugging:  ${itemCheck}`);
    if (itemCheck === "") {
      console.log("Empty");
      let visible = true;
      return visible;
    }

    this.id = this.constructor.getNextSupplyId();
    const supplies = this.constructor.findAll();
    supplies.push(this);
    fs.writeFileSync(suppliesPath, JSON.stringify({ supplies: supplies }));
    let visible = false;
    return visible;
  }
}

export default Supply;
