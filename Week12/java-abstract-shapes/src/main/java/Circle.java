public class Circle {

  private final double radius;

  public Circle (double radius) {
    this.radius = radius;
  }

  public double perimeter() {
    return (2 * Math.PI * this.radius);
  }

  public double area() {
    return (this.radius * this.radius) * Math.PI;
  }

}
