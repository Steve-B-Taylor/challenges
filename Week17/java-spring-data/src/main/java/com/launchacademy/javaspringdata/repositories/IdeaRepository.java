package com.launchacademy.javaspringdata.repositories;

import com.launchacademy.javaspringdata.models.Idea;
import org.springframework.data.repository.CrudRepository;

public interface IdeaRepository extends CrudRepository<Idea, Integer> {
}