package com.launchacademy.petadoption.controllers;

import com.launchacademy.petadoption.models.PetType;
import com.launchacademy.petadoption.repositories.PetTypeRepository;
import com.launchacademy.petadoption.services.PetTypeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class PetApiV1RestController {

  private final PetTypeService petTypeService;

  @Autowired
  public PetApiV1RestController(PetTypeService petTypeService) {
    this.petTypeService = petTypeService;
  }

  @GetMapping("/pets")
  public List<PetType> getPetType() {
    return petTypeService.findAll();
  }

}
