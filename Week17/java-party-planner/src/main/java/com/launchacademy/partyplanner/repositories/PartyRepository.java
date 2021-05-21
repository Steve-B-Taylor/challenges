package com.launchacademy.partyplanner.repositories;

import java.util.List;
import com.launchacademy.partyplanner.models.Party;
import org.springframework.data.repository.CrudRepository;

public interface PartyRepository extends CrudRepository<Party, Integer> {

  List<Party> findAllByName(String name);
}

