public class Car extends Automobile {

  private int capacity;
  private int passengers;

  public Car(String type, String model, String make, int mpg, int fuelCapacity, int capacity, int passengers) {
    super(type, model, make, mpg, fuelCapacity);
    this.capacity = capacity;
    this.passengers = passengers;
    toggleEngine();
  }

  public int getCapacity() {
    return this.capacity;
  }

  public int getNumPassengers() {
    return this.passengers;
  }

  public boolean addPassengers(int numToAdd) {
    if ((numToAdd + this.passengers) > this.capacity ) {
      return false;
    }
    this.passengers += numToAdd;
    return true;
  }

  public void exitPassengers(int numToExit) {
    if ((this.passengers - numToExit) < 0) {
      this.passengers = 0;
    } else {
      this.passengers -= numToExit;
    }
  }
}
