package com.launchacademy.thymeleafViews.controllers;

import com.launchacademy.thymeleafViews.models.Trip;
import java.util.Date;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/trips")
public class TripsController {
  @GetMapping
  public String findAll(Model model) {
    Trip trip = new Trip();
    trip.setDescription("Lunch meeting in Boston");
    trip.setMilesTraveled(20.1);
    trip.setTraveledOn(new Date());

    model.addAttribute(trip);
    return "trips/index";
  }
}