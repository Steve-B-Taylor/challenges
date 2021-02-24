let createNewRocket = () => {
  let rocket = {
    fuel: 0,
    addFuel(int) {
      this.fuel += int;
      console.log(`Our fuel level is: ${this.fuel}`);
      //return this.fuel;
    },
    fire() {
      if (this.fuel > 0) {
        this.fuel -= 1;
        console.log("The engines have been fired!");
        console.log(`The current fuel level is: ${this.fuel}`);
        return true;
      } else {
        console.log("The engines failed to fire... check fuel level?");
        return false;
      }
    },
  };
  return rocket;
};

export default createNewRocket;
