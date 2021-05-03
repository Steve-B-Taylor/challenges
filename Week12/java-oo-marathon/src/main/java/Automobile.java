public class Automobile {

  private final String type;
  private final String make;
  private final String model;
  private final int mpg;
  private final int fuelCapacity;
  private boolean running;

  public Automobile(String type, String model, String make, int mpg, int fuelCapacity) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.mpg = mpg;
    this.fuelCapacity = fuelCapacity;
    this.running = true;
  }

  public String getType() {
    return this.type;
  }

  public String getMake() {
    return this.make;
  }

  public String getModel() {
    return this.model;
  }

  public int getMpg() {
    return this.mpg;
  }

  public int getFuelCapacity() {
    return this.fuelCapacity;
  }

  public boolean isRunning() {
    return this.running;
  }

  public void toggleEngine() {
//    if (this.isRunning() == true) {
//      this.running = false;
//    } else {
//      this.running = true;
//    }
    this.running = !this.running;
  }
}
