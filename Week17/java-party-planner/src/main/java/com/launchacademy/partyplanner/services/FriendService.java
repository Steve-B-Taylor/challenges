package com.launchacademy.partyplanner.services;

import com.launchacademy.partyplanner.models.Friend;
import com.launchacademy.partyplanner.models.Party;
import com.launchacademy.partyplanner.repositories.FriendRepository;
import com.launchacademy.partyplanner.repositories.PartyRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FriendService {

  private FriendRepository friendRepository;

  @Autowired
  public FriendService(FriendRepository friendRepository) {
    this.friendRepository = friendRepository;
  }

  public List<Friend> findAll() {
    return (List<Friend>) this.friendRepository.findAll();
  }

  public Friend findById (Integer id) {
    return this.friendRepository.findById(id).get();
  }

  public void addToList(Friend friend) {
    this.friendRepository.save(friend);
  }
}
