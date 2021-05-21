package com.launchacademy.petadoption.repositories;

import com.launchacademy.petadoption.models.AdoptablePet;
import com.launchacademy.petadoption.models.PetType;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdoptablePetRepository extends PagingAndSortingRepository<AdoptablePet, Integer> {

}