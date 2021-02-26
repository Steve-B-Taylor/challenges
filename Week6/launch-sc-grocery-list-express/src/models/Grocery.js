import fs from "fs";

const groceriesPath = "groceries.json";

const readJSON = () => {
  return JSON.parse(fs.readFileSync(groceriesPath));
};

class Grocery {
  constructor({ name }) {
    this.name = name;
  }

  static findAll() {
    const groceryData = readJSON().groceries;
    const groceryObj = groceryData.map((grocery) => {
      return new Grocery(grocery);
    });
    return groceryObj;
  }

  save() {
    const items = this.constructor.findAll();
    items.push(this);
    fs.writeFileSync(groceriesPath, JSON.stringify({ groceries: items }));
  }

  isValid() {
    if (!this.name.trim()) {
      return false;
    }
    return true;
  }
}

export default Grocery;
