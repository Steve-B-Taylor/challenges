package com.launchacademy.farmville;

public class Bat extends Mammal implements Flyer, Seer {
  private boolean flying;

  public Bat(boolean isAlive, int ageInYears, int milkLevelPercentage) {
    super(isAlive, ageInYears, milkLevelPercentage);
    flying = false;
  }

  public String says() {
    return "squeek";
  }

  public void takeOff() {
    flying = true;
  }

  public void land() {
    flying = false;
  }

  public boolean isFlying() {
    return flying;
  }

  public boolean canSeeColors() {
    return false;
  }

  public boolean canSeeColors(int hourOfDay) {
    //the hour of day doesn't matter for the bat
    return this.canSeeColors();
  }
}