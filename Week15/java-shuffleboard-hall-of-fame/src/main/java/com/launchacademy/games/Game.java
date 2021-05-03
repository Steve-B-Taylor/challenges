package com.launchacademy.games;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="games")
public class Game {
  @Id
  @SequenceGenerator(name="game_generator", sequenceName = "")
}
