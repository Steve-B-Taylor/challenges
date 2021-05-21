package com.launchacademy.partyplanner.controllers;

import com.launchacademy.partyplanner.services.PartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PartiesController {

  private PartyService partyService;

  @Autowired
  public PartiesController(PartyService partyService) {
    this.partyService = partyService;
  }

  @GetMapping("/parties")
  public String listParties(Model model) {
    model.addAttribute("parties", partyService.getList());
    return "parties/index";
  }
}
