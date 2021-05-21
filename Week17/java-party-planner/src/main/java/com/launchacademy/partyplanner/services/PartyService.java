package com.launchacademy.partyplanner.services;

import java.util.List;
import com.launchacademy.partyplanner.models.Party;
public interface PartyService {

  List<Party> getList();

  void addToList(Party party);

}
