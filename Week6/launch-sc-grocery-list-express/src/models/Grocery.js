import fs from "fs";

const groceriesPath = "groceries.json";
const randomGroceriesPath = "exceeds_random_items.json";

const readJSON = () => {
  return JSON.parse(fs.readFileSync(groceriesPath));
};

const readRandomJSON = () => {
  return JSON.parse(fs.readFileSync(randomGroceriesPath));
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

  static findAllRandom() {
    const groceryData = readRandomJSON().items;
    const groceryObj = groceryData.map((grocery) => {
      return new Grocery(grocery);
    });
    console.log(groceryObj);
    return groceryObj;
  }

  save() {
    const items = this.constructor.findAll();
    items.push(this);
    fs.writeFileSync(groceriesPath, JSON.stringify({ groceries: items }));
  }

  isValid() {
    if (!this.name) {
      return false;
    }
    return true;
  }
}

export default Grocery;
