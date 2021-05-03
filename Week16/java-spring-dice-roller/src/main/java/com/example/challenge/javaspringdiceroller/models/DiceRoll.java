package com.example.challenge.javaspringdiceroller;

import org.springframework.stereotype.Component;

@Component
public class DiceRoll {
  private int rollDie;

  public int getRollDie(int max) {
    rollRandom(1, max);
    return rollDie;
  }

  public void setRollDie(int rollDie) {
    this.rollDie = rollDie;
  }

  public int rollRandom(int min, int max) {
    min = (int) Math.ceil(min);
    max = (int) Math.floor(max);
    return (int) Math.floor(Math.random() * (max - min) + min);
  }
}
