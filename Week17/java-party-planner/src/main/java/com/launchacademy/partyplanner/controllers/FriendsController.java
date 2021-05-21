package com.launchacademy.partyplanner.controllers;

import com.launchacademy.partyplanner.models.Party;
import com.launchacademy.partyplanner.services.FriendService;
import com.launchacademy.partyplanner.services.PartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class FriendsController {

  private FriendService friendService;

  @Autowired
  public FriendsController(FriendService friendService) {
    this.friendService = friendService;
  }

  @GetMapping
  public String root() {
    return "redirect:/parties";
  }

  @GetMapping("/friends")
  public String listParties(Model model) {
    model.addAttribute("friends", friendService.findAll());
    return "friends/index";
  }

  @GetMapping("/friends/show/{id}")
  public String getFriend(@PathVariable Integer id, Model model) {
    model.addAttribute("party", friendService.findById(id));
    return "parties/show";
  }

  @GetMapping("/new")
  public String getNewParty(@ModelAttribute Party party) {
    return "parties/new";
  }

  @PostMapping("/parties")
  public String createParty(@ModelAttribute("party") Party party) {
    partyService.addToList(party);
    return "redirect:/parties/show/" + party.getId();
  }
}
