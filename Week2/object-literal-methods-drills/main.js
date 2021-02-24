// your code, here
let guybrushThreepwood = {
  firstName: "Guybrush",
  lastName: "Threepwood",
  title: "Flooring Inspector",
  lungCapacityMinutes: 10,
  breathHeldMinutes: 0,
  gameOver: false,
  greet() {
    console.log(`I'm ${this.firstName} ${this.lastName}, ${this.title}!`);
  },
  holdBreath(mins) {
    if (mins) this.breathHeldMinutes = mins;
    if (this.breathHeldMinutes >= this.lungCapacityMinutes) {
      console.log(
        "You can hold your breath for a long time!  But it wasn't long enough... game over."
      );
      this.gameOver = true;
    }
    this.breathHeldMinutes++;
  },
  inventory: [],
  haveGrog: false,
  addToInventory(item) {
    if (!this.inventory.includes(item)) {
      this.inventory.push(item);
    }
  },
  checkGrogStatus() {
    grogMaterials = true;
    if (this.inventory.includes("red dye #2")) {
      if (this.inventory.includes("battery acid")) {
        console.log("Makin' some grog!");
        this.haveGrog = true;
      } else {
        grogMaterials = false;
      }
    } else {
      grogMaterials = false;
    }
    if (!grogMaterials) {
      console.log("Where has all the grog gone?");
    }
  },
};

guybrushThreepwood.greet();
guybrushThreepwood.title = "Mighty Pirate";
guybrushThreepwood.greet();
guybrushThreepwood.holdBreath(1);
guybrushThreepwood.addToInventory("red dye #2");
guybrushThreepwood.holdBreath(3);
guybrushThreepwood.addToInventory("battery acid");
guybrushThreepwood.holdBreath(2);
guybrushThreepwood.addToInventory("bucket of herring");
console.log(Object.keys(guybrushThreepwood));
guybrushThreepwood.holdBreath(6);
console.log(Object.values(guybrushThreepwood));
guybrushThreepwood.holdBreath(9);
guybrushThreepwood.checkGrogStatus();
guybrushThreepwood.holdBreath(12);
console.log(guybrushThreepwood);
console.log(guybrushThreepwood.inventory);
