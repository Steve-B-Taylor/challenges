package com.launchacademy.teamrosterwithspring.repositories;

import com.launchacademy.teamrosterwithspring.models.Player;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository extends CrudRepository<Player, Integer> {

  List<Player> findAllByName(String name);
}
