package com.example.challenge.javaspringdiceroller.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RollsController {
  @GetMapping("/rolls/new")
  public String getNew(@RequestParam int guess, Model model) {
    //Implement your logic here

    //this will allow you to use the variable `num` in your JSP/JSTL view
    //model.addAttribute("num", num);

    //render src/main/webapp/rolls/show.jsp
    return "show";
  }
}
