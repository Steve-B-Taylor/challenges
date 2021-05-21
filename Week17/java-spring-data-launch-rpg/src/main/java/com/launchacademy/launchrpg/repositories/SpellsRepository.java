package com.launchacademy.launchrpg.repositories;

import com.launchacademy.launchrpg.models.Spells;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpellsRepository extends CrudRepository<Spells, Integer> {
}
