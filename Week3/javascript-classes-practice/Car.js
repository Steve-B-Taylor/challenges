class Car {
  constructor(make, model, mileage = 0) {
    (this.make = make), (this.model = model), (this.mileage = mileage);
  }
  drive(miles) {
    this.mileage += miles;
    return miles;
  }
}

export default Car;
