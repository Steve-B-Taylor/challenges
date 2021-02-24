// your code, here
class Pool {
  constructor(width, length) {
    this.width = width;
    this.length = length;
    if (this.length === undefined) {
      this.length = width;
    }
  }
  area() {
    return this.width * this.length;
  }
  volume() {
    return this.area() * 5;
  }
}

export default Pool;
