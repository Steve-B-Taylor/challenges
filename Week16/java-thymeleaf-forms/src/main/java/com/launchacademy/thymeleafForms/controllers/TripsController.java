package com.launchacademy.thymeleafForms.controllers;

import com.launchacademy.thymeleafForms.models.Trip;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/trips")
public class TripsController {
  @GetMapping("/new")
  public String getNewForm(@ModelAttribute Trip trip) {
    return "trips/new";
  }
}