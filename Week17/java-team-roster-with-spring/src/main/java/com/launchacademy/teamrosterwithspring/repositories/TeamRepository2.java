package com.launchacademy.teamrosterwithspring.repositories;

import java.util.List;
import com.launchacademy.teamrosterwithspring.models.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Integer> {

  List<Team> findByTeamName(String team_name);

}
