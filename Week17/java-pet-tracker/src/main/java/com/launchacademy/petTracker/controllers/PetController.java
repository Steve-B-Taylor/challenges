package com.launchacademy.petTracker.controllers;

import com.launchacademy.petTracker.models.Pet;
import com.launchacademy.petTracker.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pets")
public class PetController {

  private PetRepository petRepo;

  @Autowired
  public PetController(PetRepository petRepo) {
    this.petRepo = petRepo;
  }

  public Page<Pet> findPets(Model model, Pageable pageablePet){
    return petRepo.findAll(pageablePet);
  }
}
