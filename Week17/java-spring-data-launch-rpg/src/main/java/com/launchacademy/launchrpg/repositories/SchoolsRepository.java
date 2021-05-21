package com.launchacademy.launchrpg.repositories;

import com.launchacademy.launchrpg.models.Schools;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolsRepository extends CrudRepository <Schools, Integer>{
}
