package com.launchacademy.farmville;

public class Plane implements Flyer {
  private String tailNumber;
  private String model;
  private boolean flying;
  private int fuelLevel;

  private static int FUEL_REQUIRED_FOR_TAKEOFF = 5;
  private static int FUEL_REQUIRED_FOR_LANDING = 3;

  Plane(String tailNumber, String model) {
    this.tailNumber = tailNumber;
    this.model = model;
    this.flying = false;
    this.fuelLevel = 100;
  }

  public void takeOff() {
    this.fuelLevel -= FUEL_REQUIRED_FOR_TAKEOFF;
    this.flying = true;
  }

  public void land() {
    this.fuelLevel -= FUEL_REQUIRED_FOR_LANDING;
    this.flying = false;
  }

  public boolean isFlying() {
    return flying;
  }
}