package com.launchacademy.teamrosterwithspring.seeders;

import java.util.Arrays;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TeamSeeder implements CommandLineRunner {

  private TeamRepository teamRepository;

  private TeamSeeder(TeamRepository teamRepository) {
    this.teamRepository = teamRepository;
  }
  @Override
  public void run(String... args) throws Exception {
    List<String> teamNamesList = Arrays
        .asList("Norway", "South Korea", "Sweeden", "Switzerland", "United States");

    for (String teamName : teamNamesList) {
      List<Team> teams = teamRepository
    }

  }
}
