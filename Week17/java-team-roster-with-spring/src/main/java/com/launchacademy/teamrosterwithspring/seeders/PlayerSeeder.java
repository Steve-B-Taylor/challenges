package com.launchacademy.teamrosterwithspring.seeders;

import com.launchacademy.teamrosterwithspring.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class PlayerSeeder implements CommandLineRunner {

  private PlayerRepository playerRepository;

  @Autowired


  @Override
  public void run(String... args) throws Exception {

  }

}
