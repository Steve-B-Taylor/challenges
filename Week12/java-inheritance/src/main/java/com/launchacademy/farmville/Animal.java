package com.launchacademy.farmville;

import java.util.ArrayList;
import java.util.List;

public abstract class Animal {
  private boolean isAlive;
  private int ageInYears;
  private boolean isSleeping;

  public Animal(boolean isAlive, int ageInYears) {
    this.isAlive = isAlive;
    this.ageInYears = ageInYears;
    this.isSleeping = false;
  }

  public void goToSleep() {
    this.isSleeping = true;
  }

  public void wakeUp() {
    this.isSleeping = false;
  }

  public abstract String says();

  public static void main(String[] args) {
//    Penguin blackBeauty = new Penguin(true, 6, 0);
//    Pig babe = new Pig(true, 4, 10);
//    Cow sue = new Cow(true, 7, 100);
//    System.out.println(sue.says());
//    Chicken foghorn = new Chicken(true, 10);
//
//    ArrayList<Animal> animalsInBarn = new ArrayList<Animal>();
//    animalsInBarn.add(blackBeauty);
//    animalsInBarn.add(babe);
//    animalsInBarn.add(sue);
//    animalsInBarn.add(foghorn);
//
//    ArrayList<Mammal> mammalsInBarn = new ArrayList<Mammal>();
//    mammalsInBarn.add(blackBeauty);
//    mammalsInBarn.add(babe);
//    mammalsInBarn.add(sue);
//
//    for(Mammal animal : mammalsInBarn) {
//      animal.milk(5);
//    }
//    Animal jackalope = new Animal(true, 11);

      Bat dracula = new Bat(true, 5, 0);
      Plane jetBlue = new Plane("JA4312", "747");

      List<Flyer> flyers = new ArrayList<Flyer>();
      flyers.add(dracula);
      flyers.add(jetBlue);

      for(Flyer flyer : flyers) {
        flyer.takeOff();
        flyer.land();
      }


  }

  private void milk(int i) {
  }
}