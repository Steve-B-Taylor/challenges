class Airplane {
  constructor(type, wingLoad, horsepower, isStarted, isFlying) {
    this.type = type;
    this.wingLoad = wingLoad;
    this.horsepower = horsepower;
    this.isStarted = false;
    this.isFlying = false;
  }
  start() {
    if (!this.isStarted) {
      this.isStarted = true;
      // console.log("airplane started");
    } else {
      // console.log("airplane already started");
    }
    return true;
  }
  takeOff() {
    if (this.isStarted === true) {
      // console.log("airplane launched");
      this.isFlying = true;
    } else {
      // console.log("airplane not started, please start");
      this.isFlying = false;
    }
    return this.isFlying;
  }
  land() {
    if (!this.isStarted) {
      // console.log("airplane not started, please start");
      this.isStarted = false;
      return false;
    }
    if (!this.isFlying) {
      if (this.isStarted) {
        // console.log("plane already on ground");
        return false;
      }
    }
    if (this.isFlying) {
      // console.log("airplane landed");
      this.isFlying = false;
      return true;
    }
  }
}
export default Airplane;
