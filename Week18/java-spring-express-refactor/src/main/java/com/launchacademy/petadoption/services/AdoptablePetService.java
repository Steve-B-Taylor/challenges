package com.launchacademy.petadoption.services;

import com.launchacademy.petadoption.models.AdoptablePet;
import com.launchacademy.petadoption.models.PetType;
import com.launchacademy.petadoption.repositories.AdoptablePetRepository;
import com.launchacademy.petadoption.repositories.PetTypeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdoptablePetService {
  private final AdoptablePetRepository adoptablePetRepo;

  @Autowired
  public AdoptablePetService(AdoptablePetRepository adoptablePetRepo) {
    this.adoptablePetRepo = adoptablePetRepo;
  }

  public List<AdoptablePet> getPets() {
    return (List<AdoptablePet>) this.adoptablePetRepo.findAll();
  }
}
