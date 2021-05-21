package com.launchacademy.partyplanner.seeders;

import com.launchacademy.partyplanner.models.Party;
import com.launchacademy.partyplanner.repositories.PartyRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class PartySeeder implements CommandLineRunner {

  private PartyRepository partyRepository;

  @Autowired
  private PartySeeder(PartyRepository playerRepository) {
    this.partyRepository = partyRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    Map<String, String> partySeedMap = new HashMap<>();

    partySeedMap.put("Marching Party", "2 hours of pure, beautiful pain", "The Grinder");
    partySeedMap.put("D2 LAN Party", "Smash hordes of evil with your friends",
        "Whoever has the basement with the Mt. Dew!");

    for (String key : partySeedMap.keySet()) {
      List<Party> playerList = partyRepository.findAllByName(key);
      if (playerList.isEmpty()) {
        Party party = new Party();
        party.setName(key);
        party.setDescription(partySeedMap.get(key));
        party.setLocation(partySeedMap.get(key));
        partyRepository.save(party);
      }
    }
  }
}
