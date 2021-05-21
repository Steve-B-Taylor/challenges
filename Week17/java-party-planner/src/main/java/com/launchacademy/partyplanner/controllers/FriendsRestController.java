package com.launchacademy.partyplanner.controllers;

import com.launchacademy.partyplanner.models.Friend;
import com.launchacademy.partyplanner.models.Party;
import com.launchacademy.partyplanner.repositories.FriendRepository;
import com.launchacademy.partyplanner.repositories.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/friends")
public class FriendsRestController {

  private FriendRepository friendRepo;

  @Autowired
  public FriendsRestController(FriendRepository friendRepo) {
    this.friendRepo = friendRepo;
  }

  @GetMapping
  public Page<Friend> getFriends(Pageable pageable) {
    return friendRepo.findAll(pageable);
  }
}
