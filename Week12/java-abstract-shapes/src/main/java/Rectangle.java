public class Rectangle {

  private final double length;
  private final double width;

  public Rectangle (double length, double width) {
    this.length = length;
    this.width = width;
  }

  public double perimeter() {
    return (this.length * 2) + (this.width * 2);
  }

  public double area() {
    return (this.length * this.width);
  }
}
