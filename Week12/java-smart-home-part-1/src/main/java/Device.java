public class Device {

  protected boolean isPowered;
  protected boolean isSwitched;

  public Device(boolean isPowered, boolean isSwitched) {
    this.isPowered = false;
    this.isSwitched = false;
  }

  public boolean isPowered() {
    return this.isPowered;
  }

  public boolean isSwitched() {
    return this.isSwitched;
  }

  public void togglePower() {
    this.isPowered = !isPowered;
  }

  public void flipSwitch() {
    this.isSwitched = !isSwitched;
  }

}
