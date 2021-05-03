package com.launchacademy.farmville;

public class Cow extends Mammal {
  public Cow(boolean isAlive, int ageInYears, int milkLevelPercentage) {
    super(isAlive, ageInYears, milkLevelPercentage);
  }
  public String says() {
    return "Moo";
  }
//  @Override
//  public String says() {
//    return "Moo";
//  }

}