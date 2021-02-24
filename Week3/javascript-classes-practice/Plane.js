class Plane {
  constructor(make, model, capacity, passengerCount = 0) {
    (this.make = make),
      (this.model = model),
      (this.capacity = capacity),
      (this.passengerCount = passengerCount);
  }
  board() {
    if (this.passengerCount <= this.capacity) {
      console.log(
        `The plane has ${this.passengerCount} of an allowed ${this.capacity}`
      );
      this.passengerCount++;
    } else {
      console.log("This plane is at capacity!");
    }
  }
}

export default Plane;
