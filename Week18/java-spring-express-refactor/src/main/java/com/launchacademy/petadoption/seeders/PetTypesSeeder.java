package com.launchacademy.petadoption.seeders;

import com.launchacademy.petadoption.repositories.PetTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class PetTypesSeeder implements CommandLineRunner {
  private PetTypeRepository petTypeRepo;

  @Autowired
  public PetTypesSeeder(PetTypeRepository petTypeRepo) {
    this.petTypeRepo = petTypeRepo;
  }
  @Override
  public void run(String... args) throws Exception {
    Map<String, String>



    'dogs', 'cats'

        'https://i.postimg.cc/VJg6kzsb/dogs-splash.jpg', 'https://i.postimg.cc/mh9gFY24/cats-splash.jpg'

        'Lovable pups', 'Adorable cats'
  }

  }
