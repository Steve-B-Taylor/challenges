package com.launchacademy.games;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name="scores")
public class Game {
  @Id
  @SequenceGenerator(name="game_generator", sequenceName = "scores_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "game_generator")
  private Long id;

  @NotEmpty
  @Column(name="red_team_player_1", nullable = false)
      private String redP1;

  @NotEmpty
  @Column(name="red_team_player_2", nullable = false)
  private String redP2;

  @NotEmpty
  @Column(name="blue_team_player_1", nullable = false)
  private String blueP1;

  @NotEmpty
  @Column(name="blue_team_player_2", nullable = false)
  private String blueP2;

  @NotEmpty
  @Column(name="red_team_score", nullable = false)
  private String redTeamScore;

  @NotEmpty
  @Column(name="blue_team_score", nullable = false)
  private String blueTeamScore;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getRedP1() {
    return redP1;
  }

  public void setRedP1(String redP1) {
    this.redP1 = redP1;
  }

  public String getRedP2() {
    return redP2;
  }

  public void setRedP2(String redP2) {
    this.redP2 = redP2;
  }

  public String getBlueP1() {
    return blueP1;
  }

  public void setBlueP1(String blueP1) {
    this.blueP1 = blueP1;
  }

  public String getBlueP2() {
    return blueP2;
  }

  public void setBlueP2(String blueP2) {
    this.blueP2 = blueP2;
  }

  public String getRedTeamScore() {
    return redTeamScore;
  }

  public void setRedTeamScore(String redTeamScore) {
    this.redTeamScore = redTeamScore;
  }

  public String getBlueTeamScore() {
    return blueTeamScore;
  }

  public void setBlueTeamScore(String blueTeamScore) {
    this.blueTeamScore = blueTeamScore;
  }
}
