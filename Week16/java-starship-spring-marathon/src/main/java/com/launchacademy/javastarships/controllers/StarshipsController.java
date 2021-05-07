package com.launchacademy.javastarships.controllers;

import com.launchacademy.javastarships.models.StarShip;
import com.launchacademy.javastarships.services.StarShipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/starships")
public class StarshipsController {

  private StarShipService starShipService;

  @Autowired
  public StarshipsController(StarShipService starShipService) {
    this.starShipService = starShipService;
  }
}
