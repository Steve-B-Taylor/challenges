package com.launchacademy.farmville;

public class Penguin extends Mammal {

  public Penguin(boolean isAlive, int ageInYears, int milkLevelPercentage) {
    super(isAlive, ageInYears, milkLevelPercentage);
  }

  public String says() {
    return "BwrahBrwahBrwah";
  }
}

