package com.launchacademy.teamrosterwithspring.controllers;

import com.launchacademy.teamrosterwithspring.models.League;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TeamsController {

  private League league = League.getLeague();

  @GetMapping("/")
  public String getTeams(Model model){
    model.addAttribute("teams", league.getTeams());
    return "index";

  }
}
